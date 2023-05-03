import { generateInputWithMemory } from "./generateInputWithMemory";

const nameInputComponent = () => {
  const nameInput = generateInputWithMemory("personal-info.nameInput");
  const nameError = document.createElement("span");
  nameInput.setAttribute("type", "text");
  nameInput.pattern = "[A-Za-z ,.'-]+";
  nameInput.required = true;
  nameInput.placeholder = "e.g. Stephen King";
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name";
  nameLabel.appendChild(nameInput);
  nameLabel.appendChild(nameError);

  const checkError = () => {
    nameLabel.classList.remove("example");
    if (nameInput.validity.patternMismatch) {
      nameError.innerText = "Please enter valid name";
      nameLabel.classList.add("example");
    } else if (nameInput.validity.valueMissing) {
      nameError.innerText = "This field is required";
    } else {
      nameError.innerText = "";
    }
  };

  nameInput.addEventListener("blur", () => {
    nameInput.classList.add("viewed");
    checkError();
  });

  nameInput.addEventListener("input", () => {
    nameInput.classList.add("viewed");
    checkError();
  });

  nameInput.addEventListener("validate", checkError, false);

  return nameLabel;
};

export { nameInputComponent };
