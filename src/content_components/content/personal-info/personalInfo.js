import { generateInputWithMemory } from "../generateInputWithMemory";
import "./personalInfo_style.scss";

const generatePersonalInfoForm = () => {
  const container = document.createElement("div");
  container.classList.add("personal-info");
  // container.classList.add("content");

  const header = document.createElement("h1");
  header.innerText = "Personal info";
  header.classList.add("header");
  container.appendChild(header);

  const description = document.createElement("p");
  description.innerText =
    "Please provide your name, email address, and phone number.";
  description.classList.add("description");
  container.appendChild(description);

  const myForm = document.createElement("form");

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
  nameLabel.innerText = "Name";
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
  emailLabel.innerText = "Email";
  emailLabel.appendChild(emailInput);

  const phoneInput = generateInputWithMemory("personal-info.phoneInput");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("placeholder", "e.g.+1 234 567 890");

  // eslint-disable-next-line prefer-regex-literals, no-useless-escape
  phoneInput.pattern =
    "(\\+\\d{1,2}){0,1}[\\s.\\-]{0,1}[0-9]{3}[\\s.\\-]{0,1}[0-9]{3}[\\s.\\-]{0,1}[0-9]{4}";

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
  phoneLabel.innerText = "Phone";
  phoneLabel.appendChild(phoneInput);

  myForm.appendChild(validityField);
  myForm.appendChild(nameLabel);
  myForm.appendChild(emailLabel);
  myForm.appendChild(phoneLabel);

  container.appendChild(myForm);

  return container;
};
export { generatePersonalInfoForm };
