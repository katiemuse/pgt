import angular from 'angular';

export class Hotspots {
  constructor() {
    this.hotspots = [];
  }

  pop(number, positionX, positionY, clickHandler) {
    if (angular.isObject(number)) {
      const params = number; // NOTE: enable parameters as pop argument
      this.hotspot = {
        number: params.number,
        position: params.position,
        clickHandler: params.clickHandler
      };
    } else {
      this.hotspot = {
        number,
        position: {
          top: positionY,
          left: positionX
        },
        clickHandler
      };
    }

    this.hotspots.push(this.hotspot);
  }

  activate(number) {
    let i = 0;
    for (i; i < this.hotspots.length; i++) {
      this.hotspots[i].active = this.hotspots[i].number === number;
    }
  }

  clear() {
    this.hotspots.splice(0, this.hotspots.length);
  }
}
