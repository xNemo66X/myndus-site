/* ============================================================
   Myndus Theme System v4.0
   Handles both mobile and desktop toggle buttons
   ============================================================ */
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll(".theme-toggle");

  var savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    root.classList.add("light-mode");
  } else {
    root.classList.remove("light-mode");
  }

  function updateAllButtons() {
    var icon = root.classList.contains("light-mode") ? "☀️" : "🌙";
    var label = root.classList.contains("light-mode") ? "Switch to Dark Mode" : "Switch to Light Mode";
    buttons.forEach(function(btn) {
      btn.textContent = icon;
      btn.setAttribute("aria-label", label);
    });
  }

  updateAllButtons();

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      root.classList.toggle("light-mode");
      localStorage.setItem("theme", root.classList.contains("light-mode") ? "light" : "dark");
      updateAllButtons();
    });
  });
})();
