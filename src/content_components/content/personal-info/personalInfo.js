import { generateInputWithMemory } from "./generateInputWithMemory";
import "./personalInfo_style.scss";
import { phoneInputComponent } from "./personalInfo_phoneInput";
import { nameInputComponent } from "./personalInfo_nameInput";
import { emailInputComponent } from "./personalInfo_emailInput";

const generatePersonalInfoForm = () => {
  const container = document.createElement("div");
  container.classList.add("personal-info");

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
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  const nameField = nameInputComponent();
  const emailField = emailInputComponent();
  const phoneField = phoneInputComponent();

  myForm.appendChild(nameField);
  myForm.appendChild(emailField);
  myForm.appendChild(phoneField);

  container.appendChild(myForm);

  return container;
};
export { generatePersonalInfoForm };
