import thankYouImageFile from "./icon-thank-you.svg";

const generateThankYouPage = () => {
  const thankYou = document.createElement("div");

  const thankYouIcon = document.createElement("img");
  thankYouIcon.src = thankYouImageFile;
  thankYou.appendChild(thankYouIcon);

  const header = document.createElement("h1");
  header.textContent = "Thank you!";
  thankYou.appendChild(header);

  const subtext = document.createElement("p");
  subtext.textContent =
    "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.";
  thankYou.appendChild(subtext);

  return thankYou;
};

export { generateThankYouPage };
