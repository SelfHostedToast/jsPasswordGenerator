const pass = document.querySelector("#pass");
const buttonGen = document.querySelector("#buttonGen");

function createRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`!@#$%^&*()_-+={[}]|;";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  pass.innerText = result;
}

if ((usrlen = +prompt("How many characters do you want in your password?"))) {
  usrlen = usrlen;
} else {
  window.alert("Refresh the page and enter a valid number of characters.");
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}
