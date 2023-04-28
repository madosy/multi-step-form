const user = (() => {
  let currentStep = 1;
  let lastStep = 4;

  function getCurrentStep() {
    return currentStep;
  }
  function getLastStep() {
    return lastStep;
  }

  function updateStep(newStepNum) {
    if (newStepNum > 0 && newStepNum <= lastStep) {
      currentStep = newStepNum;
    } else {
      console.log("invalid step: " + newStepNum);
    }
  }

  return { getCurrentStep, getLastStep, updateStep };
})();

export { user };
