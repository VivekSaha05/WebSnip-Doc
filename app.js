function copyToClipboard(button) {
  // Get the data-snippet-id attribute from the clicked button
  const snippetId = button.getAttribute("data-snippet-id");

  // Get the text content of the specified code snippet
  const codeSnippet = document.getElementById(snippetId).innerText;

  // Create a temporary textarea element to copy the text to the clipboard
  const textarea = document.createElement("textarea");
  textarea.value = codeSnippet;
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Optionally, provide some visual feedback to the user
  alert("Code copied to clipboard!");
}

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".menu-button");
  var menuList = document.querySelector("ul");

  menuButton.addEventListener("click", function () {
    menuList.classList.toggle("hide");
  });
});

const options = {
  bottom: "64px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
