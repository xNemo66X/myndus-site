/* ============================================================
   Myndus Theme System v3.0
   Works across all pages
   ============================================================ */
(function () {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    root.classList.add("light-mode");
  } else {
    root.classList.remove("light-mode");
  }

  const updateButtonIcon = () => {
    if (!button) return;
    button.textContent = root.classList.contains("light-mode") ? "☀️" : "🌙";
    button.setAttribute("aria-label",
      root.classList.contains("light-mode") ? "Switch to Dark Mode" : "Switch to Light Mode"
    );
  };

  updateButtonIcon();

  if (button) {
    button.addEventListener("click", () => {
      root.classList.toggle("light-mode");
      localStorage.setItem("theme", root.classList.contains("light-mode") ? "light" : "dark");
      updateButtonIcon();
    });
  }
})();
