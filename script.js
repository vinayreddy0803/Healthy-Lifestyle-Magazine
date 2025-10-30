// 🌙 Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text/icon
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️";
  } else {
    darkModeBtn.textContent = "🌙";
  }
});
