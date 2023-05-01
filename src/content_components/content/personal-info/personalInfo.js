import { generateInputWithMemory } from "../generateInputWithMemory";

const generatePersonalInfoForm = () => {
  const personalInfo = document.createElement("form");

  const validityField = document.createElement("div");
  validityField.innerText = "hi";

  const nameInput = generateInputWithMemory("personal-info.nameInput");
  nameInput.setAttribute("type", "text");
  nameInput.pattern = "[A-Za-z ,.'-]+"; //no regex slashes needed
  nameInput.addEventListener("input", (event) => {
    if (nameInput.validity.patternMismatch) {
      validityField.innerText = "Please enter valid name";
      nameInput.setCustomValidity("Please enter a valid name");
    } else {
      nameInput.setCustomValidity("");
      validityField.innerText = "hi";
    }
  });

  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name: ";
  nameLabel.appendChild(nameInput);

  const emailInput = generateInputWithMemory("personal-info.emailInput");
  emailInput.setAttribute("type", "email");
  emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Please enter a valid email!!!!");
    } else {
      emailInput.setCustomValidity("");
    }
    emailInput.reportValidity();
  });
  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email: ";
  emailLabel.appendChild(emailInput);

  const phoneInput = generateInputWithMemory("personal-info.phoneInput");
  phoneInput.setAttribute("type", "tel");
  phoneInput.pattern = "[0-9]{3}[ -.]{0,1}[0-9]{3}[ -.]{0,1}[0-9]{4}";
  phoneInput.innerText = "";
  phoneInput.addEventListener("input", (event) => {
    if (phoneInput.validity.patternMismatch) {
      phoneInput.setCustomValidity("Please enter in format 123-123-1234");
    } else {
      phoneInput.setCustomValidity("");
    }
    phoneInput.reportValidity();
  });
  const phoneLabel = document.createElement("label");
  phoneLabel.innerText = "Phone: ";
  phoneLabel.appendChild(phoneInput);

  personalInfo.appendChild(validityField);
  personalInfo.appendChild(nameLabel);
  personalInfo.appendChild(emailLabel);
  personalInfo.appendChild(phoneLabel);

  return personalInfo;
};
export { generatePersonalInfoForm };
