'use strict';

import angular from 'angular';
import '../styles/_steps.scss';

export default function stepsContainer($parse, $rootScope, $interval, $sce, stepsConfig, Steps, stepsRegisterEvents) {
  return {
    replace: true,
    restrict: 'EA',
    scope: true, // creates an internal scope for this directive
    template: require('../partials/steps.html'),
    link(scope, elm, attrs) {
      let id = 0;

      const mergedConfig = angular.extend({}, stepsConfig, scope.$eval(attrs.stepsOptions));

      scope.config = {
        position: mergedConfig['position-class'],
        title: mergedConfig['title-class'],
        message: mergedConfig['message-class'],
        tap: mergedConfig['tap-to-dismiss'],
        closeButton: mergedConfig['close-button'],
        animation: mergedConfig['animation-class'],
        mouseoverTimer: mergedConfig['mouseover-timer-stop']
      };

      scope.deregClearSteps = null;
      scope.deregNewStep = null;

      scope.$on('$destroy', () => {
        if (scope.deregClearSteps) {
          scope.deregClearSteps();
        }
        if (scope.deregNewStep) {
          scope.deregNewStep();
        }
        if (scope.deregStepActivated) {
          scope.deregStepActivated();
        }
        scope.deregClearSteps = null;
        scope.deregNewStep = null;
        scope.deregStepActivated = null;
      });

      scope.configureTimer = function (step) {
        const timeout = angular.isNumber(step.timeout) ? step.timeout : mergedConfig['time-out'];
        if (timeout > 0) {
          /* eslint-disable */
          setTimeout(step, timeout);
          /* eslint-enable */
        }
      };

      function addStep(step) {
        step.number = mergedConfig['number-classes'][step.number];
        if (!step.number) {
          step.number = mergedConfig['number-class'];
        }

        id++;
        angular.extend(step, {id});

        // Set the step.bodyOutputType to the default if it isn't set
        step.bodyOutputType = step.bodyOutputType || mergedConfig['body-output-type'];
        switch (step.bodyOutputType) {
          case 'trustedHtml': {
            step.html = $sce.trustAsHtml(step.body);
            break;
          }
          case 'template': {
            step.bodyTemplate = step.body || mergedConfig['body-template'];
            break;
          }
          case 'templateWithData': {
            const fcGet = $parse(step.body || mergedConfig['body-template']);
            const templateWithData = fcGet(scope);
            step.bodyTemplate = templateWithData.template;
            step.data = templateWithData.data;
            break;
          }
          default: {
            break;
          }
        }

        scope.configureTimer(step);

        if (mergedConfig['newest-on-top'] === true) {
          scope.steps.unshift(step);
          if (mergedConfig.limit > 0 && scope.steps.length > mergedConfig.limit) {
            scope.steps.pop();
          }
        } else {
          scope.steps.push(step);
          if (mergedConfig.limit > 0 && scope.steps.length > mergedConfig.limit) {
            scope.steps.shift();
          }
        }

        step.mouseover = false;
      }

      function setTimeout(step, time) {
        step.timeout = $interval(() => {
          if (!step.mouseover) {
            scope.removeStep(step.id);
          }
        }, time);
      }

      scope.steps = [];

      if (!stepsRegisterEvents.isRegisteredNewStepEvent()) {
        stepsRegisterEvents.registerNewStepEvent();
        scope.deregNewStep = $rootScope.$on('steps-newStep', () => {
          addStep(Steps.step);
        });
      }

      if (!stepsRegisterEvents.isRegisteredRemoveStepEvent()) {
        stepsRegisterEvents.registerRemoveStepEvent();
        scope.deregRemoveStep = $rootScope.$on('steps-removeStep', (event, number) => {
          scope.removeStep(number);
        });
      }

      if (!stepsRegisterEvents.isRegisteredStepActivatedEvent()) {
        stepsRegisterEvents.registerStepActivatedEvent();
        scope.deregStepActivated = $rootScope.$on('steps-activate', (event, number) => {
          let i = 0;
          for (i; i < scope.steps.length; i++) {
            scope.steps[i].active = scope.steps[i].number === mergedConfig['number-classes'][number];
          }
        });
      }

      if (!stepsRegisterEvents.isRegisteredClearAllStepsEvent()) {
        stepsRegisterEvents.registerClearAllStepsEvent();
        scope.deregClearSteps = $rootScope.$on('steps-clearSteps', () => {
          scope.steps.splice(0, scope.steps.length);
        });
      }
    },
    controller($scope, $transitions) {
      const x = $transitions.onSuccess({ }, trans => {
        $scope.stateClass = trans.to().name;
      });

      $rootScope.$on('$destroy', x);

      $scope.stopTimer = function (step) {
        step.mouseover = true;
        if ($scope.config.mouseoverTimer === true) {
          if (step.timeout) {
            $interval.cancel(step.timeout);
            step.timeout = null;
          }
        }
      };

      $scope.restartTimer = function (step) {
        step.mouseover = false;
        if ($scope.config.mouseoverTimer === true) {
          if (!step.timeout) {
            $scope.configureTimer(step);
          }
        } else if (step.timeout === null) {
          $scope.removeStep(step.id);
        }
      };

      $scope.removeStep = function (id) {
        debugger;
        let i = 0;
        for (i; i < $scope.steps.length; i++) {
          if ($scope.steps[i].id === id) {
            break;
          }
        }
        $scope.steps.splice(i, 1);
      };

      /* $scope.click = function (step, isCloseButton) {
        if ($scope.config.tap === true || isCloseButton == true) {
          var removeToast = true;
          if (step.clickHandler) {
            if (angular.isFunction(step.clickHandler)) {
              removeToast = step.clickHandler(step, isCloseButton);
            }
            else if (angular.isFunction($scope.$parent.$eval(step.clickHandler))) {
              removeToast = $scope.$parent.$eval(step.clickHandler)(step, isCloseButton);
            }
            else {
              console.log("STEP-NOTE: Your click handler is not inside a parent scope of step-container.");
            }
          }
          if (removeToast) {
            $scope.removeToast(step.id);
          }
        }
      }; */
    }
  };
}
