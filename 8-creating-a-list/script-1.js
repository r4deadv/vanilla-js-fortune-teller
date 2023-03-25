let div = document.createElement("div");
console.log(div);

let link = document.createElement("a");
console.log(link);

let article = document.createElement("article");
console.log(article);

let chicken = document.createElement("chicken");
console.log(chicken);

let placeholder = document.createElement("_");
console.log(placeholder);

// Add attributes
div.textContent = "Hello, world!";
div.className = "new-div";
div.id = "new-div";
div.setAttribute("data-div", "new");
div.style.color = "#fff";
div.style.backgroundColor = "rebeccapurple";
