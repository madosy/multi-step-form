const clickHandler = (() => {
  function addFunctionalityToDom() {
    console.log("helo");
    // tempFuncForPersonalInfo();
  }

  return { addFunctionalityToDom };
})();

export { clickHandler };

// in summary validate form will check for required and display whatever missing values.
// I can add the inline validation checks as "add functionality to dom" when eveything loads in the beginning. So those 2 are separate?
