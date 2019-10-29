"use strict";

export default function ChapterCustomerAppController(
  $scope,
  $timeout,
  Steps,
  WizardHandler,
  $document
) {
  $scope.processOptions = [
    { label: "Select one", value: 1 },
    { label: "A record changes", value: 2 },
    { label: "Its invoked by another process", value: 3 }
  ];

  $scope.process = {
    name: "",
    api: "",
    starts: $scope.processOptions[0]
  };

  const delayInMs = 1500;

  let timeoutProcessName;
  $scope.$watch("process.name", (newValue, oldValue) => {
    if (oldValue !== newValue) {
      $scope.process.api = $scope.process.name.toLowerCase().replace(/ /g, "_");
      $timeout.cancel(timeoutProcessName);
      timeoutProcessName = $timeout(() => {
        if (newValue.length > 3) {
          Steps.activate("three");
          if (WizardHandler.wizard("monitor").currentStepNumber() === 3) {
            WizardHandler.wizard("monitor").next();
          }
        }
      }, delayInMs);
    }
  });

  $scope.$watch("process.starts", (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue.value === 2) {
        Steps.activate("four");
        if (WizardHandler.wizard("monitor").currentStepNumber() === 4) {
          WizardHandler.wizard("monitor").next();
        }
      }
    }
  });

  $scope.NextSlideNoTab = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("");
  };

  $scope.GoToFirstStep = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("one");
  };

  $scope.GoToStep2 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("two");
  };
  $scope.GoToStep3 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("three");
  };
  $scope.GoToStep4 = function() {
    WizardHandler.wizard("monitor").next();
    Steps.activate("four");
  };

  $scope.RenderConfetti = function() {
    const canvas = $document[0].getElementById("success-confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
