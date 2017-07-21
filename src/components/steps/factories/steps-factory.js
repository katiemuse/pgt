'use strict';

export default function stepsRegisterEvents() {
  const stepsFactory = {
    _NewStepEvent: false,
    _StepActivated: false,
    _ClearAllStepsEvent: false,
    registerNewStepEvent() {
      this._NewStepEvent = true;
    },
    registerStepActivatedEvent() {
      this._StepActivated = true;
    },
    registerClearAllStepsEvent() {
      this._ClearAllStepsEvent = true;
    },
    isRegisteredStepActivatedEvent() {
      return this._StepActivated;
    },
    isRegisteredNewStepEvent() {
      return this._NewStepEvent;
    },
    isRegisteredClearAllStepsEvent() {
      return this._ClearAllStepsEvent;
    }
  };
  return {
    registerNewStepEvent: stepsFactory.registerNewStepEvent,
    registerStepActivatedEvent: stepsFactory.registerStepActivatedEvent,
    registerClearAllStepsEvent: stepsFactory.registerClearAllStepsEvent,
    isRegisteredNewStepEvent: stepsFactory.isRegisteredNewStepEvent,
    isRegisteredStepActivatedEvent: stepsFactory.isRegisteredStepActivatedEvent,
    isRegisteredClearAllStepsEvent: stepsFactory.isRegisteredClearAllStepsEvent
  };
}
