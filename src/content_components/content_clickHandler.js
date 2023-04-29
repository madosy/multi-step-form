const clickHandler = (() => {
  function validateForm() {
    const activeForm = document.querySelector(".content.active > form");
    if (activeForm == null) return true;
    return activeForm.reportValidity(); //later I will have to use checkvalidity and show validations on my own.
  }
  return { validateForm };
})();

export { clickHandler };
