'use strict';

export default function ChapterDataController($scope, Steps, Hotspots, WizardHandler, $timeout, $document) {
  let _timeout;
  let _timeout2;

  $scope.customobj = {
    name: ''
  };

  $scope.button = {
    show: false
  };

  $scope.label = {
    active: true
  };

  $scope.ToggleButton = () => {
    $scope.button.show = !$scope.button.show;
  };

  $scope.toggleLabel = () => {
    $scope.label.active = !$scope.label.active;
  };

  $scope.$watch('customobj.name', (newValue, oldValue) => {
    if (_timeout) { // if there is already a timeout in process cancel it
      $timeout.cancel(_timeout);
    }

    if (_timeout2) {
      $timeout.cancel(_timeout2);
    }
    if (newValue !== oldValue) {
      _timeout = $timeout(() => {
        if (newValue.length > 3) {
          $scope.toggleLabel();

          _timeout2 = $timeout(() => {
            WizardHandler.wizard('monitor').next();
            Steps.activate('three');
          }, 2000);
        }
      }, 1000);
    }
  });

  $scope.Next = function () {
  // $log.log('Current step: ' + WizardHandler.wizard('monitor').currentStepNumber());
    if (WizardHandler.wizard('monitor').currentStepNumber() === 1) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('one');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 2) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('two');
    }
  };

  $scope.GoToStep2A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
  };

  $scope.GoToStep3A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };

  $scope.GoToStep4A = function() {
    /* this is where the right rail of steps dissapears */
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep4B = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToStep5 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("five");
  };

  $scope.GoToStep5A = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToSuccess = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("six");
  };

  $scope.RenderConfetti = function() {
    const canvas = $document[0].getElementById("success-confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // const cx = ctx.canvas.width / 2;
    // const cy = ctx.canvas.height / 2;

    const confetti = [];
    const confettiCount = 300;
    const gravity = 0.5;
    const terminalVelocity = 5;
    const drag = 0.075;
    const colors = [
      { front: "red", back: "darkred" },
      { front: "green", back: "darkgreen" },
      { front: "blue", back: "darkblue" },
      { front: "yellow", back: "darkyellow" },
      { front: "orange", back: "darkorange" },
      { front: "pink", back: "darkpink" },
      { front: "purple", back: "darkpurple" },
      { front: "turquoise", back: "darkturquoise" }
    ];
    // resizeCanvas = () => {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   let cx = ctx.canvas.width / 2;
    //   let cy = ctx.canvas.height / 2;
    // };
    const randomRange = (min, max) => Math.random() * (max - min + min);

    const initConfetti = () => {
      for (let i = 0; i < confettiCount; i++) {
        confetti.push({
          color: colors[Math.floor(randomRange(0, colors.length))],
          dimensions: {
            x: randomRange(10, 20),
            y: randomRange(10, 30)
          },
          position: {
            x: randomRange(0, canvas.width),
            y: canvas.height - 1
          },
          rotation: randomRange(0, 2 * Math.PI),
          scale: {
            x: 1,
            y: 1
          },
          velocity: {
            x: randomRange(-25, 25),
            y: randomRange(0, -50)
          }
        });
      }
    };
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((confetto, index) => {
        const width = confetto.dimensions.x * confetto.scale.x;
        const height = confetto.dimensions.y * confetto.scale.y;

        // Move canvas to position and rotate
        ctx.translate(confetto.position.x, confetto.position.y);
        ctx.rotate(confetto.rotation);

        // Apply forces to velocity
        confetto.velocity.x -= confetto.velocity.x * drag;
        confetto.velocity.y = Math.min(
          confetto.velocity.y + gravity,
          terminalVelocity
        );
        confetto.velocity.x +=
          Math.random() > 0.5 ? Math.random() : -Math.random();

        // Set position
        confetto.position.x += confetto.velocity.x;
        confetto.position.y += confetto.velocity.y;

        // Delete confetti when out of frame
        if (confetto.position.y >= canvas.height) {
          confetti.splice(index, 1);
        }

        // Loop confetto x position
        if (confetto.position.x > canvas.width) {
          confetto.position.x = 0;
        }
        if (confetto.position.x < 0) {
          confetto.position.x = canvas.width;
        }

        // Spin confetto by scaling y
        confetto.scale.y = Math.cos(confetto.position.y * 0.1);
        ctx.fillStyle =
          confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

        // Draw confetto
        ctx.fillRect(-width / 2, -height / 2, width, height);

        // Reset transform matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      });

      // Fire off another round of confetti
      if (confetti.length <= 10) {
        initConfetti();
      }

      window.requestAnimationFrame(render);
    };
    initConfetti();
    render();
  };
}

/*
    else if (WizardHandler.wizard('monitor').currentStepNumber() === 3) {
      WizardHandler.wizard('monitor').next();
      Steps.activate('three');
    } else if (WizardHandler.wizard('monitor').currentStepNumber() === 4) {
      $scope.toggleLabel();
      $timeout(() => {
        WizardHandler.wizard('monitor').next();
        Steps.activate('four');
      }, 2600);
    }
*/
