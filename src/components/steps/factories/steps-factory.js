'use strict';
/**
 * @ngdoc service
 * @name pardotInteractiveGuidedTour.steps
 * @description
 * # steps
 * Factory in the pardotInteractiveGuidedTour.
 */
angular.module('pardotInteractiveGuidedTour')
  .factory('stepsRegisterEvents', function() {

    var stepsFactory = {
      _NewStepEvent: false,
      _StepActivated: false,
      _ClearAllStepsEvent: false,
      registerNewStepEvent: function(){
        this._NewStepEvent = true;
      },
      registerStepActivatedEvent: function(){
        this._StepActivated = true;
      },
      registerClearAllStepsEvent: function(){
        this._ClearAllStepsEvent = true;
      },
      isRegisteredStepActivatedEvent: function(){
        return this._StepActivated;
      },
      isRegisteredNewStepEvent: function(){
        return this._NewStepEvent;
      },
      isRegisteredClearAllStepsEvent: function(){
        return this._ClearAllStepsEvent;
      }
    }
    return {
      registerNewStepEvent: stepsFactory.registerNewStepEvent,
      registerStepActivatedEvent: stepsFactory.registerStepActivatedEvent,
      registerClearAllStepsEvent: stepsFactory.registerClearAllStepsEvent,
      isRegisteredNewStepEvent: stepsFactory.isRegisteredNewStepEvent,
      isRegisteredStepActivatedEvent: stepsFactory.isRegisteredStepActivatedEvent,
      isRegisteredClearAllStepsEvent: stepsFactory.isRegisteredClearAllStepsEvent
    }
  });