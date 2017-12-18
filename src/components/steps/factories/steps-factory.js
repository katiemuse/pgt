'use strict';

export default function stepsRegisterEvents() {
  const stepsFactory = {
    _NewStepEvent: false,
    _RemoveStepEvent: false,
    _StepActivated: false,
    _ClearAllStepsEvent: false,
    registerNewStepEvent() {
      this._NewStepEvent = true;
    },
    registerRemoveStepEvent() {
      this._RemoveStepEvent = true;
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
    isRegisteredRemoveStepEvent() {
      return this._RemoveStepEvent;
    },
    isRegisteredClearAllStepsEvent() {
      return this._ClearAllStepsEvent;
    }
  };
  return {
    registerNewStepEvent: stepsFactory.registerNewStepEvent,
    registerRemoveStepEvent: stepsFactory.registerRemoveStepEvent,
    registerStepActivatedEvent: stepsFactory.registerStepActivatedEvent,
    registerClearAllStepsEvent: stepsFactory.registerClearAllStepsEvent,
    isRegisteredNewStepEvent: stepsFactory.isRegisteredNewStepEvent,
    isRegisteredRemoveStepEvent: stepsFactory.isRegisteredRemoveStepEvent,
    isRegisteredStepActivatedEvent: stepsFactory.isRegisteredStepActivatedEvent,
    isRegisteredClearAllStepsEvent: stepsFactory.isRegisteredClearAllStepsEvent
  };
}
