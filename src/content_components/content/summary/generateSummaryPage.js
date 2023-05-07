import { generateSummaryTable } from "./generateSummaryTable";

const generateSummaryPage = () => {
  const container = document.createElement("div");
  container.classList.add("summary");

  const header = document.createElement("h1");
  header.innerText = "Finishing up";
  header.classList.add("header");
  container.appendChild(header);

  const description = document.createElement("p");
  description.innerText = "Double-check everything looks OK before confirming.";
  description.classList.add("description");
  container.appendChild(description);

  const summaryTable = generateSummaryTable();
  container.appendChild(summaryTable);

  return container;
};

export { generateSummaryPage };
