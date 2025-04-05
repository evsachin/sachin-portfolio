
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    document.getElementById("form-message").textContent =
      "Message sent successfully!";
  });
