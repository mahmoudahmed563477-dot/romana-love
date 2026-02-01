let messageIndex = 0;

const messages = [
  "لا 😐",
  "متأكدة؟ 🤨",
  "فكري تاني 🥺",
  "هتزعليني 💔",
  "خلاص بقى 😭"
];

const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

function handleNoClick() {
  const x = Math.random() * 250;
  const y = Math.random() * 120;

  noButton.style.left = x + "px";
  noButton.style.top = y + "px";

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const size = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = (size + 4) + "px";
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
