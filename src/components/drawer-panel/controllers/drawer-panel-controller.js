'use strict';
/**
 * @ngdoc function
 * @name pardotInteractiveGuidedTour.controller:hotspotPanelCtrl
 * @description
 * # hotspotPanelCtrl
 * Controller of the pardotInteractiveGuidedTour
 */
angular.module('pardotInteractiveGuidedTour')
  .controller('DrawerPanelCtrl', function ($scope, Hotspots, TopNavbar) {
    var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];

    $scope.previousActive = false;
    $scope.nextActive = false;

    ctrl.select = function(selectedTab) {
      angular.forEach(tabs, function(tab) {
        if (tab.active && tab !== selectedTab) {
          tab.active = false;
          tab.onDeselect();
        }
      });

      var selectedTabIndex = _.indexOf(tabs, selectedTab);
      $scope.previousActive = selectedTabIndex > 0;
      $scope.nextActive = selectedTabIndex < (tabs.length - 1);

      selectedTab.active = true;
      selectedTab.onSelect();
    };

    ctrl.notifySelected = function(selectedTab) {
      var selectedTabIndex = _.indexOf(tabs, selectedTab);
      if($scope.type && $scope.type == "hotspots"){
        Hotspots.activate(selectedTabIndex + 1);
      }
    };

    ctrl.selectByIndex = function(index) {
      var selectedTab = tabs[index];
      angular.forEach(tabs, function(tab) {
        if (tab.active && tab !== selectedTab) {
          tab.active = false;
          tab.onDeselect();
        }
      });
      selectedTab.active = true;
      selectedTab.onSelect();
    };

    ctrl.addTab = function addTab(tab) {
      tabs.push(tab);
      // we can't run the select function on the first tab
      // since that would select it twice
      if (tabs.length === 1 && tab.active !== false) {
        tab.active = true;
      } else if (tab.active) {
        ctrl.select(tab);
      }
      else {
        tab.active = false;
      }

      if($scope.type && $scope.type == "hotspots"){
        TopNavbar.HotspotsEnabled = true;
      }

      if($scope.type && $scope.type == "did-you-know"){
        TopNavbar.DidYouKnowEnabled = true;
      }

    };

    ctrl.removeTab = function removeTab(tab) {
      var index = tabs.indexOf(tab);
      //Select a new tab if the tab to be removed is selected and not destroyed
      if (tab.active && tabs.length > 1 && !destroyed) {
        //If this is the last tab, select the previous tab. else, the next tab.
        var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
        ctrl.select(tabs[newActiveIndex]);
      }
      tabs.splice(index, 1);
    };



    var destroyed;
    $scope.$on('$destroy', function() {
      destroyed = true;

      if($scope.type && $scope.type == "hotspots"){
        TopNavbar.HotspotsEnabled = false;
      }

      if($scope.type && $scope.type == "did-you-know"){
        TopNavbar.DidYouKnowActive = false;
      }
    });


    $scope.$watch('selected',function(newValue, oldValue){
      if(newValue) {
        if(newValue != oldValue) {
          ctrl.selectByIndex(newValue.number - 1);
        }
      }
    });

    $scope.Next = function($event) {
      var selectedTab = _.find(tabs, function(tab){
        return tab.active == true;
      });

      var selectedTabIndex = _.indexOf(tabs, selectedTab);

      if(selectedTabIndex < tabs.length - 1 ){
        ctrl.selectByIndex(selectedTabIndex + 1);
        ctrl.notifySelected(tabs[selectedTabIndex + 1]);
      }

      $event.preventDefault();
      return false;
    };

    $scope.Previous = function($event) {
      var selectedTab = _.find(tabs, function(tab){
        return tab.active == true;
      });

      var selectedTabIndex = _.indexOf(tabs, selectedTab);

      if(selectedTabIndex > 0){
        ctrl.selectByIndex(selectedTabIndex - 1);
        ctrl.notifySelected(tabs[selectedTabIndex - 1])
      }

      $event.preventDefault();
      return false;
    };

  });
