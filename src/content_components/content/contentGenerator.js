const contentGenerator = ({ title, description, formObject }) => {
  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = title;
  const p = document.createElement("p");
  p.classList.add("description");
  p.textContent = description;
  const div = document.createElement("div");
  div.classList.add("form-container");
  div.appendChild(formObject);

  const container = document.createElement("div");
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(div);

  return container;
};
