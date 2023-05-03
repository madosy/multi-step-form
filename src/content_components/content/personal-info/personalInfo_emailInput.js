import { generateInputWithMemory } from "./generateInputWithMemory";

const emailInputComponent = () => {
  const emailInput = generateInputWithMemory("personal-info.emailInput");
  emailInput.setAttribute("type", "email");
  emailInput.required = true;
  emailInput.placeholder = "e.g. stephenking@lorem.com";
  const emailErrorSpan = document.createElement("span");
  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email Address";
  emailLabel.appendChild(emailInput);
  emailLabel.appendChild(emailErrorSpan);

  const checkError = () => {
    if (emailInput.validity.valueMissing) {
      emailInput.setCustomValidity("");
      emailErrorSpan.innerText = "This field is required";
      emailLabel.classList.remove("example");
    } else if (emailInput.validity.typeMismatch) {
      emailErrorSpan.innerText = "Please match requested format";
      emailInput.setCustomValidity("");
      emailLabel.classList.add("example");
    } else {
      emailInput.setCustomValidity("");
      emailLabel.classList.remove("example");
    }
  };

  emailInput.addEventListener("validate", () => {
    emailInput.classList.add("viewed");
    checkError();
  });

  emailInput.addEventListener("blur", () => {
    emailInput.classList.add("viewed");
    checkError();
  });

  emailInput.addEventListener("input", () => {
    emailInput.classList.add("viewed");
    checkError();
  });

  return emailLabel;
};

export { emailInputComponent };
