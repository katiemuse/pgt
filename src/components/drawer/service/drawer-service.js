export class Drawer {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  openToDidYouKnow() {
    this.$rootScope.$emit('drawer-open-to-did-you-know');
  }
  openToIntro() {
    this.$rootScope.$emit('drawer-open-to-intro');
  }
  openToHotspot(hotspot) {
    this.$rootScope.$emit('drawer-open-to-hotspot', hotspot);
  }
  close() {
    this.$rootScope.$emit('drawer-close');
  }
}

//
// angular.module('pardotInteractiveGuidedTour')
//   .service('Drawer',  function ($rootScope) {
//     this.openToDidYouKnow = function () {
//       $rootScope.$emit('drawer-open-to-did-you-know');
//     };
//     this.openToIntro = function () {
//       $rootScope.$emit('drawer-open-to-intro');
//     };
//     this.openToHotspot = function (hotspot) {
//       $rootScope.$emit('drawer-open-to-hotspot', hotspot);
//     };
//     this.close = function(){
//       $rootScope.$emit('drawer-close');
//     };
//   });
