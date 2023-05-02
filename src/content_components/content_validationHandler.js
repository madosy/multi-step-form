const validationHandler = (() => {
  function validateForm() {
    const activeForm = document.querySelector(".content-panel form");
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

  return { validateForm };
})();

export { validationHandler };
