const clickHandler = (() => {
  function addFunctionalityToDom() {
    console.log("helo");
    // tempFuncForPersonalInfo();
  }

  function validateForm() {
    const activeForm = document.querySelector(".content.active > form");
    if (activeForm == null) return true;

    // checkRequired();
    return activeForm.checkValidity(); //later I will have to use checkvalidity and show validations on my own.
  }

  // function checkRequired() {
  //   const personalInfoForm = document.querySelector("div.personal-info > form");
  //   const name = personalInfoForm.querySelector("#name");
  //   console.log("Value missing? " + name.validity.valueMissing);
  // }
  // function tempFuncForPersonalInfo() {
  //   const personalInfoForm = document.querySelector("div.personal-info > form");
  //   const name = personalInfoForm.querySelector("#name");
  //   name.addEventListener("input", () => {});
  // }

  return { validateForm, addFunctionalityToDom };
})();

export { clickHandler };

// in summary validate form will check for required and display whatever missing values.
// I can add the inline validation checks as "add functionality to dom" when eveything loads in the beginning. So those 2 are separate?
