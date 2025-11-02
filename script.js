document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !subject || !message) {
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "red";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    status.textContent = "⚠️ Invalid email address.";
    status.style.color = "red";
  } else {
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "lightgreen";
    this.reset();
  }
});
