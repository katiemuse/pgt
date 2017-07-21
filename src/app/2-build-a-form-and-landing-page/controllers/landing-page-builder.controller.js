'use strict';

export default function LandingPageBuilderController($scope, $timeout, Steps, WizardHandler) {
  $scope.formBuilder = {
    headline: 'Ready To Clean Up Your Act?',
    image: null,
    imageUrl: null,
    bannerImageUrl: null
  };

  $scope.imageOptions = [
    {label: 'Butterfly', value: 'assets/images/stories/2-build-a-form-and-landing-page/2-screen-edit-image-1.png', bannerImage: 'assets/images/stories/2-build-a-form-and-landing-page/2-banner-a.png'},
    {label: 'Wind Energy', value: 'assets/images/stories/2-build-a-form-and-landing-page/2-screen-edit-image-2.png', bannerImage: 'assets/images/stories/2-build-a-form-and-landing-page/2-banner-b.png'},
    {label: 'Blue Sky', value: 'assets/images/stories/2-build-a-form-and-landing-page/2-screen-edit-image-3.png', bannerImage: 'assets/images/stories/2-build-a-form-and-landing-page/2-banner-c.png'}
  ];

  $scope.$watch('formBuilder.image', newValue => {
    $scope.formBuilder.imageUrl = newValue.value;
    $scope.formBuilder.bannerImageUrl = newValue.bannerImage;
  });

  $scope.formBuilder.image = $scope.imageOptions[0];

  $scope.ShowHeadlineEditor = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
    }
  };

  $scope.SaveHeadline = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    }
  };

  $scope.ShowImageEditor = function () {
    if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      WizardHandler.wizard('monitor').next();
      // Steps.activate("three");
    }
  };

  $scope.ShowStepThree = function () {
    Steps.activate('three');
  };

  $scope.Done = function () {
    Steps.clear();
    WizardHandler.wizard('monitor').next();
  };
}
