'use strict';

export default function WizardHandler() {
  const service = {};

  const wizards = {};

  service.defaultName = 'defaultWizard';

  service.addWizard = function (name, wizard) {
    wizards[name] = wizard;
  };

  service.removeWizard = function (name) {
    delete wizards[name];
  };

  service.wizard = function (name) {
    let nameToUse = name;
    if (!name) {
      nameToUse = service.defaultName;
    }

    return wizards[nameToUse];
  };

  return service;
}
