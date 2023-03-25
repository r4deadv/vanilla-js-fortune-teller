/**
 * Simple multi-line strings
 */
let str1 = `<h1>Hello, world!</h1>
    <p>How are you today?</p>`;

console.log(str1);

/**
 * Using variables in strings
 */
let greeting = "Hi, universe!";
let message = "How is the weather today?";
let str2 = `<h1>${greeting}</h1>
    <p>${message}</p>`;

console.log(str2);

/**
 * Using conditionals and methods
 */
let wizards = ["Hermione", "Neville", "Gandalf", "Radagast", "Merlin"];
let showHeading = false;
let str3 = `${showHeading ? "<h1>Awesome Wizards</h1>" : ""}
    ${(function () {
      if (wizards.length > 3) {
        return "<p>There are at least three wizards.</p>";
      }
      return "<p>There are fewer than three wizards.</p>";
    })()}
    <ul>
      ${wizards
        .map(function (wizard) {
          return `<li>${wizard}</li>`;
        })
        .join("")}
    </ul>`;

console.log(str3);
