import { generateInputWithMemory } from "../generateInputWithMemory";

const nameInputComponent = () => {
  const nameInput = generateInputWithMemory("personal-info.nameInput");
  const nameError = document.createElement("span");
  nameInput.setAttribute("type", "text");
  nameInput.pattern = "[A-Za-z ,.'-]+";
  nameInput.required = true;
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name";
  nameLabel.appendChild(nameInput);
  nameLabel.appendChild(nameError);

  nameInput.addEventListener("blur", () => {
    nameInput.classList.add("viewed");
    if (nameInput.validity.valueMissing) {
      nameError.innerText = "This field is required";
    }
  });

  nameInput.addEventListener("input", () => {
    if (nameInput.validity.patternMismatch) {
      nameError.innerText = "Please enter valid name";
    } else if (nameInput.validity.valueMissing) {
      nameError.innerText = "This field is required";
    } else {
      nameError.innerText = "";
    }
  });

  return nameLabel;
};

export { nameInputComponent };
