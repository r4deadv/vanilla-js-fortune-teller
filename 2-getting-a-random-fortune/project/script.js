// Get the DOM elements
let btn = document.querySelector("button");
let fortune = document.querySelector("#fortune");

// The fortune responses
let responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

/**
 * Get the fortune and render it into the DOM
 */
function getFortune() {
  let random = Math.floor(Math.random() * responses.length);
  fortune.textContent = responses[random];
}

// Listen for clicks on the button
btn.addEventListener("click", getFortune);
