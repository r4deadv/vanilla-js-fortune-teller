let h1 = document.querySelector("h1");

let hero = h1.closest(".hero");
console.log(hero);

let sandwich = h1.closest("[data-sandwich]");
console.log(sandwich);

let sandwich2 = h1.parentNode.closest("[data-sandwich]");
console.log(sandwich2);
