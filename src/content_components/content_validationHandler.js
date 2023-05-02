import PubSub, { publish } from "pubsub-js";

const validationHandler = (() => {
  function validateForm() {
    const activeForm = document.querySelector(".content-panel form");
    if (activeForm == null) return true;

    const activeInputs = activeForm.querySelectorAll("input");
    const validate = new Event("validate");
    activeInputs.forEach((item) => {
      item.classList.add("viewed");
      item.dispatchEvent(validate);
    });

    console.log("Active form is: " + activeForm.checkValidity());
    return activeForm.checkValidity(); //later I will have to use checkvalidity and show validations on my own.
  }

  return { validateForm };
})();

export { validationHandler };
