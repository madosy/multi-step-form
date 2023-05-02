import { generateInputWithMemory } from "../generateInputWithMemory";

const phoneInputComponent = () => {
  const phoneInput = generateInputWithMemory("personal-info.phoneInput");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("placeholder", "e.g.+1 234 567 890");
  phoneInput.required = true;
  phoneInput.pattern =
    "(\\+{0,1}\\d{1,2}){0,1}[\\s.\\-]{0,1}[0-9]{3}[\\s.\\-]{0,1}[0-9]{3}[\\s.\\-]{0,1}[0-9]{4}";

  phoneInput.addEventListener("input", (event) => {
    if (phoneInput.validity.patternMismatch) {
      phoneInput.setCustomValidity("Please enter in format 123-123-1234");
    } else {
      phoneInput.setCustomValidity("");
    }
    phoneInput.reportValidity();
  });

  const phoneLabel = document.createElement("label");
  phoneLabel.innerText = "Phone Number";
  phoneLabel.appendChild(phoneInput);
  const phoneInputError = document.createElement("span");
  phoneLabel.appendChild(phoneInputError);

  phoneInput.addEventListener("blur", () => {
    phoneInput.classList.add("viewed");
    if (phoneInput.validity.valueMissing) {
      phoneInputError.innerText = "This field is required";
    }
  });
  phoneInput.addEventListener("input", () => {
    if (phoneInput.validity.patternMismatch) {
      phoneInputError.innerText = "Please match requested format";
    } else if (phoneInput.validity.valueMissing) {
      phoneInputError.innerText = "This field is required";
    } else {
      phoneInputError.innerText = "";
    }
  });

  return phoneLabel;
};

export { phoneInputComponent };
