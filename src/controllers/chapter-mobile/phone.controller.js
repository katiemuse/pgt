'use strict';

export default function ChapterMobilePhoneController($scope, $timeout, Steps, WizardHandler, $log) {
  $scope.beginStory = function() {
    WizardHandler.wizard("phone").goTo(1);

    Steps.clear();
    Steps.pop({
      number: "one",
      title: "Click &lsquo;Get more on the App Exchange&rsquo; "
    });

    Steps.pop({
      number: "two",
      title: "In the search bar, type &lsquo;ideas&rsquo; and hit enter"
    });

    Steps.pop({
      number: "three",
      title: "Select &lsquo;Community Ideas&rsquo; from the search results"
    });

    Steps.pop({
      number: "four",
      title: "Click &lsquo;Get It Now&rsquo;"
    });

    Steps.pop({
      number: "five",
      title: "Drag and drop the Customer Ideas component from the AppExchange below the Sales Order Chart"
    });
  };

  $scope.Next = function () {
    $log.log('Current step: ' + WizardHandler.wizard('phone').currentStepNumber());
    if (WizardHandler.wizard('phone').currentStepNumber() === 0) {
      $log.log('A');
      WizardHandler.wizard('phone').next();
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 1) {
      $log.log('B');
      WizardHandler.wizard('phone').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 2) {
      $log.log('C');
      WizardHandler.wizard('phone').next();
      Steps.activate('two');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 3) {
      $log.log('D');
      WizardHandler.wizard('phone').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('phone').currentStepNumber() === 4) {
      $log.log('E');
      WizardHandler.wizard('phone').next();
      Steps.activate('four');
    } else {
      $log.log('F');
      WizardHandler.wizard('phone').next();
      Steps.activate('one');
    }
  };
}
