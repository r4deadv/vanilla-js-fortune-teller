/**
 * Encode the HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
function encodeHTML(str) {
  return str
    .replace(/data:/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/[^\w-_. ]/gi, function (c) {
      return `&#${c.charCodeAt(0)};`;
    });
}

// Variables
let div = document.querySelector("#app");
let thirdPartyString = `<img src=x onerror="alert('XSS Attack')"> 👋`;
let thirdPartyURL = `javascript:alert('Another XSS Attack')`;

// Renders the third party content as an encoded string
div.innerHTML = `<p>${encodeHTML(thirdPartyString)}</p>
    <p><a href="${encodeHTML(thirdPartyURL)}">View My Profile</a></p>`;
