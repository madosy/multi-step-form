export const generateInputWithMemory = (id) => {
  const myInput = document.createElement("input");
  myInput.addEventListener("input", () => {
    sessionStorage.setItem(id, myInput.value);
  });
  const myInputData = sessionStorage.getItem(id);
  myInput.value = myInputData;
  return myInput;
};
