function convertAddonToHTML(addon) {
  const planDuration = sessionStorage.getItem("plan-select.duration");
  const perText = () => (planDuration === "monthly" ? "mo" : "yr");
  const addonPrice = addon[planDuration];
  const addonID = `pick-addons.${addon.name}`;

  const label = document.createElement("label");
  label.classList.add("addon");
  label.setAttribute("for", addonID);
  label.innerHTML = `
  <input type="checkbox" id="${addonID}">
  <span class="addon-name">${addon.name}</span>
  <span class="addon-description">${addon.description}</span>
  <span class="addon-price">+$${addonPrice}/${perText()}</span>
  `;

  const checkbox = label.querySelector("input");
  checkbox.checked = sessionStorage.getItem(addonID);
  checkbox.addEventListener("change", () => {
    sessionStorage.setItem(addonID, checkbox.checked);
  });

  return label;
}

export { convertAddonToHTML };
