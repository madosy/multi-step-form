import { generateInputWithMemory } from "../generateInputWithMemory";

const emailInputComponent = () => {
  const emailInput = generateInputWithMemory("personal-info.emailInput");
  emailInput.setAttribute("type", "email");
  emailInput.required = true;
  const emailErrorSpan = document.createElement("span");
  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email Address";
  emailLabel.appendChild(emailInput);
  emailLabel.appendChild(emailErrorSpan);

  emailInput.addEventListener("blur", () => {
    emailInput.classList.add("viewed");
    if (emailInput.validity.valueMissing) {
      emailErrorSpan.innerText = "This field is required";
    }
  });

  emailInput.addEventListener("input", (event) => {
    emailInput.classList.add("viewed");
    if (emailInput.validity.typeMismatch) {
      emailErrorSpan.innerText = "Please match requested format";
      emailInput.reportValidity();
    } else if (emailInput.validity.valueMissing) {
      emailInput.setCustomValidity("");
      emailErrorSpan.innerText = "This field is required";
      event.preventDefault();
    } else {
      emailInput.setCustomValidity("");
    }
  });

  return emailLabel;
};

export { emailInputComponent };
