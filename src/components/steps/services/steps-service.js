import angular from 'angular';

export class Steps {
  constructor($rootScope, stepsConfig) {
    this.stepsConfig = stepsConfig;
    this.$rootScope = $rootScope;

    const x = this.stepsConfig['number-classes'];
    for (const number in x) {
      this[number] = (function (stepsType) {
        return function (title, body, timeout, bodyOutputType, clickHandler) {
          if (angular.isString(title)) {
            this.pop(
              stepsType,
              title,
              body,
              timeout,
              bodyOutputType,
              clickHandler
            );
          } else {
            this.pop(angular.extend(title, {type: stepsType}));
          }
        };
      })(number);
    }
  }

  pop(number, title, body, timeout, bodyOutputType, clickHandler, style) {
    if (angular.isObject(number)) {
      const params = number; // NOTE: anable parameters as pop argument
      this.step = {
        number: params.number,
        title: params.title,
        body: params.body,
        timeout: params.timeout,
        bodyOutputType: params.bodyOutputType,
        clickHandler: params.clickHandler,
        style: params.style
      };
    } else {
      this.step = {
        number,
        title,
        body,
        timeout,
        bodyOutputType,
        clickHandler,
        style
      };
    }
    this.$rootScope.$emit('steps-newStep');
  }

  activate(number) {
    this.$rootScope.$emit('steps-activate', number);
  }
  clear() {
    this.$rootScope.$emit('steps-clearSteps');
  }
}

// angular.module('pardotInteractiveGuidedTour')
//   .service('Steps', ['$rootScope', 'stepsConfig', function ($rootScope, stepsConfig) {
//     this.pop = function (number, title, body, timeout, bodyOutputType, clickHandler, style) {
//       if (angular.isObject(number)) {
//         let params = number; // NOTE: anable parameters as pop argument
//         this.step = {
//           number: params.number,
//           title: params.title,
//           body: params.body,
//           timeout: params.timeout,
//           bodyOutputType: params.bodyOutputType,
//           clickHandler: params.clickHandler,
//           style: params.style
//         };
//       }
//       else {
//         this.step = {
//           number: number,
//           title: title,
//           body: body,
//           timeout: timeout,
//           bodyOutputType: bodyOutputType,
//           clickHandler: clickHandler,
//           style: style
//         };
//       }
//       $rootScope.$emit('steps-newStep');
//     };
//
//     this.activate = function(number){
//       $rootScope.$emit('steps-activate', number);
//     };
//
//     this.clear = function () {
//       $rootScope.$emit('steps-clearSteps');
//     };
//
//     for (let number in stepsConfig['number-classes']) {
//       this[number] = (function (stepsType){
//         return function(title, body, timeout, bodyOutputType, clickHandler) {
//           if (angular.isString(title))
//             this.pop(stepsType, title, body, timeout, bodyOutputType, clickHandler);
//           else
//             this.pop(angular.extend(title, {type: stepsType}));
//         }
//       })(number);
//     }
//   }]);
