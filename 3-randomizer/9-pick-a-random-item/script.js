let sandwiches = ["turkey", "tuna", "ham", "pb&j"];
let sandwichesCopy = Array.from(sandwiches);
console.log(sandwichesCopy);

let btns = document.querySelectorAll("button");
let btnsArr = Array.from(btns, function (btn) {
  return btn.textContent;
});
console.log(btnsArr);
