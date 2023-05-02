import { generateInputWithMemory } from "../generateInputWithMemory";

const phoneInputComponent = () => {
  const phoneInput = generateInputWithMemory("personal-info.phoneInput");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("placeholder", "e.g.+1 234 567 890");
  phoneInput.required = true;
  phoneInput.pattern =
    "(\\+{0,1}\\d{1,2}){0,1}[\\s.\\-]{0,1}[0-9]{3}[\\s.\\-]{0,1}[0-9]{3}[\\s.\\-]{0,1}[0-9]{4}";
  const phoneInputError = document.createElement("span");
  const phoneLabel = document.createElement("label");
  phoneLabel.innerText = "Phone Number";
  phoneLabel.appendChild(phoneInput);
  phoneLabel.appendChild(phoneInputError);

  const checkError = () => {
    phoneLabel.classList.remove("example");
    if (phoneInput.validity.patternMismatch) {
      phoneInputError.innerText = "Please match requested format";
      phoneLabel.classList.add("example");
    } else if (phoneInput.validity.valueMissing) {
      phoneInputError.innerText = "This field is required";
      phoneInput.setCustomValidity("");
    } else {
      phoneInputError.innerText = "";
      phoneInput.setCustomValidity("");
    }
  };

  phoneInput.addEventListener("validate", () => {
    phoneInput.classList.add("viewed");
    checkError();
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.classList.add("viewed");
    checkError();
  });

  phoneInput.addEventListener("blur", () => {
    phoneInput.classList.add("viewed");
    checkError();
  });

  return phoneLabel;
};

export { phoneInputComponent };
