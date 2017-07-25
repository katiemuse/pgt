'use strict';

import * as _ from 'lodash';
import angular from 'angular';

export default function DrawerPanelController($scope, Hotspots, TopNavbar) {
  const ctrl = this;
  const tabs = ctrl.tabs = $scope.tabs = [];

  $scope.previousActive = false;
  $scope.nextActive = false;

  ctrl.select = function (selectedTab) {
    angular.forEach(tabs, tab => {
      if (tab.active && tab !== selectedTab) {
        tab.active = false;
        tab.onDeselect();
      }
    });

    const selectedTabIndex = _.indexOf(tabs, selectedTab);
    $scope.previousActive = selectedTabIndex > 0;
    $scope.nextActive = selectedTabIndex < (tabs.length - 1);

    selectedTab.active = true;
    selectedTab.onSelect();
  };

  ctrl.notifySelected = function (selectedTab) {
    const selectedTabIndex = _.indexOf(tabs, selectedTab);
    if ($scope.type && $scope.type === 'hotspots') {
      Hotspots.activate(selectedTabIndex + 1);
    }
  };

  ctrl.selectByIndex = function (index) {
    const selectedTab = tabs[index];
    angular.forEach(tabs, tab => {
      if (tab.active && tab !== selectedTab) {
        tab.active = false;
        tab.onDeselect();
      }
    });
    selectedTab.active = true;
    selectedTab.onSelect();
  };

  ctrl.addTab = function (tab) {
    tabs.push(tab);
    // we can't run the select function on the first tab
    // since that would select it twice
    if (tabs.length === 1 && tab.active !== false) {
      tab.active = true;
    } else if (tab.active) {
      ctrl.select(tab);
    } else {
      tab.active = false;
    }

    if ($scope.type && $scope.type === 'hotspots') {
      TopNavbar.HotspotsEnabled = true;
    }

    if ($scope.type && $scope.type === 'did-you-know') {
      TopNavbar.DidYouKnowEnabled = true;
    }
  };

  ctrl.removeTab = function (tab) {
    const index = tabs.indexOf(tab);
    // Select a new tab if the tab to be removed is selected and not destroyed
    if (tab.active && tabs.length > 1 && !destroyed) {
      // If this is the last tab, select the previous tab. else, the next tab.
      const newActiveIndex = index === tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };

  let destroyed;
  $scope.$on('$destroy', () => {
    destroyed = true;

    if ($scope.type && $scope.type === 'hotspots') {
      TopNavbar.HotspotsEnabled = false;
    }

    if ($scope.type && $scope.type === 'did-you-know') {
      TopNavbar.DidYouKnowActive = false;
    }
  });

  $scope.$watch('selected', (newValue, oldValue) => {
    if (newValue) {
      if (newValue !== oldValue) {
        ctrl.selectByIndex(newValue.number - 1);
      }
    }
  });

  $scope.Next = function ($event) {
    const selectedTab = _.find(tabs, tab => {
      return tab.active === true;
    });

    const selectedTabIndex = _.indexOf(tabs, selectedTab);

    if (selectedTabIndex < tabs.length - 1) {
      ctrl.selectByIndex(selectedTabIndex + 1);
      ctrl.notifySelected(tabs[selectedTabIndex + 1]);
    }

    $event.preventDefault();
    return false;
  };

  $scope.Previous = function ($event) {
    const selectedTab = _.find(tabs, tab => {
      return tab.active === true;
    });

    const selectedTabIndex = _.indexOf(tabs, selectedTab);

    if (selectedTabIndex > 0) {
      ctrl.selectByIndex(selectedTabIndex - 1);
      ctrl.notifySelected(tabs[selectedTabIndex - 1]);
    }

    $event.preventDefault();
    return false;
  };
}
