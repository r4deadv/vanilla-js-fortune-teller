const tableOC = document.getElementById("table-of-contents");
const allH2 = document.querySelectorAll("h2");

for (let element of allH2) {
  tableOC.innerHTML += `<a href="#${element.id}"><h2>${element.innerHTML}</h2></a>`;
}
