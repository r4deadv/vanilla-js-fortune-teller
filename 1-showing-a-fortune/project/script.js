const btn = document.querySelector("button");
const fortuneEl = document.querySelector("#fortune");
const message = `You're going to have a wonderful day!`;

btn.addEventListener("click", () => {
  fortuneEl.textContent = message;
});
