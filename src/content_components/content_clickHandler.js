const clickHandler = (() => {
  function validateForm() {
    //return true if everything looks good. Otherwise, return false and tell the display module to display the errors.
    return true;
  }
  return { validateForm };
})();

export { clickHandler };
