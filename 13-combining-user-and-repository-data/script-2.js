let wizards = ["Gandalf", "Radagast", "Merlin"];
let app = document.querySelector("#app");

// Using Array.map() and Array.join()
// app.innerHTML =
//   "<ul>" +
//   wizards
//     .map(function (wizard) {
//       return "<li>" + wizard + "</li>";
//     })
//     .join("") +
//   "</ul>";

// Using Array.forEach() and string concatenation
// let html = '';
// for (let wizard of wizards) {
// 	html += '<li>' + wizard + '</li>';
// }
// app.innerHTML = '<ul>' + html + '</ul>';

app.innerHTML = `
<ul>
${wizards.map((wizard) => `<li>${wizard}</li>`).join("")}
</ul>`;
