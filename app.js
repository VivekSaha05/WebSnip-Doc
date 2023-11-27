function copyToClipboard(button) {
    // Get the data-snippet-id attribute from the clicked button
    const snippetId = button.getAttribute('data-snippet-id');
  
    // Get the text content of the specified code snippet
    const codeSnippet = document.getElementById(snippetId).innerText;
  
    // Create a temporary textarea element to copy the text to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = codeSnippet;
    document.body.appendChild(textarea);
  
    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to the clipboard
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(textarea);
  
    // Optionally, provide some visual feedback to the user
    alert('Code copied to clipboard!');
  }


  document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-button');
    var menuList = document.querySelector('ul');

    menuButton.addEventListener('click', function () {
        menuList.classList.toggle('hide');
    });
});
  