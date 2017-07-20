import '../styles/_top-navbar.scss';

export class TopNavbarController {
  constructor($scope, TopNavbar, Drawer, Hotspots, $rootScope) {
    this.$scope = $scope;
    this.TopNavbar = TopNavbar;
    this.Drawer = Drawer;
    this.Hotspots = Hotspots;
    this.$rootScope = $rootScope;

    this.$scope.topNavbar = {
      didYouKnowActive: false,
      didYouKnowEnabled: false,
      didYouKnowCount: 0,
      hotspotsActive: false,
      hotspotsEnabled: false,
      hotspotsCount: 0,
      infoActive: false,
      infoEnabled: false
    };

    this.$scope.topNavbar.didYouKnowClicked = () => {
      if (this.$scope.topNavbar.didYouKnowEnabled) {
        this.TopNavbar.DidYouKnowActive = true;
        this.TopNavbar.DidYouKnowCount = 0;
        this.Drawer.openToDidYouKnow();
      }
    };

    this.$scope.topNavbar.hotspotsClicked = () => {
      if (this.$scope.topNavbar.hotspotsEnabled) {
        this.TopNavbar.HotspotsActive = true;
        this.TopNavbar.HotspotsCount = 0;
        this.Hotspots.activate(1);
        this.Drawer.openToHotspot({number: 1});
      }
    };

    this.$rootScope.$on('drawer-close', () => {
      // reset the button states when drawer is closed
      this.TopNavbar.DidYouKnowActive = false;
      this.TopNavbar.HotspotsActive = false;
      this.TopNavbar.InfoActive = false;
      this.$scope.topNavbar.hotspotsActive = false;
      this.$scope.topNavbar.didYouKnowActive = false;
      this.$scope.topNavbar.infoActive = false;
    });

    this.$scope.$watch(
      () => {
        return this.TopNavbar.DidYouKnowActive;
      },
      newValue => {
        this.$scope.topNavbar.didYouKnowActive = newValue;
        this.TopNavbar.HotspotsActive =
          this.TopNavbar.HotspotsActive && !newValue;
      }
    );

    this.$scope.$watch(
      () => {
        return this.TopNavbar.DidYouKnowEnabled;
      },
      newValue => {
        this.$scope.topNavbar.didYouKnowEnabled = newValue;
      }
    );

    this.$scope.$watch(
      () => {
        return this.TopNavbar.DidYouKnowCount;
      },
      newValue => {
        this.$scope.topNavbar.didYouKnowCount = newValue;
      }
    );

    this.$scope.$watch(
      () => {
        return this.TopNavbar.HotspotsActive;
      },
      newValue => {
        this.$scope.topNavbar.hotspotsActive = newValue;
        this.TopNavbar.DidYouKnowActive =
          this.TopNavbar.DidYouKnowActive && !newValue;
      }
    );

    this.$scope.$watch(
      () => {
        return this.TopNavbar.HotspotsEnabled;
      },
      newValue => {
        this.$scope.topNavbar.hotspotsEnabled = newValue;
      }
    );

    this.$scope.$watch(
      () => {
        return this.TopNavbar.HotspotsCount;
      },
      newValue => {
        this.$scope.topNavbar.hotspotsCount = newValue;
      }
    );

    this.$scope.$watch(
      () => {
        return this.TopNavbar.InfoActive;
      },
      newValue => {
        this.$scope.topNavbar.infoActive = newValue;
      }
    );
  }
}
