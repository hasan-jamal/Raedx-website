document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".btnDropdown");

  toggleButtons.forEach((button) => {
    const parent = button.closest("div");
    const menu = parent.querySelector(".publicStyleList");

    button.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close other open dropdowns
      document.querySelectorAll(".publicStyleList").forEach((m) => {
        if (m !== menu) {
          m.classList.remove("show");
        }
      });

      document.querySelectorAll(".btnDropdown").forEach((btn) => {
        if (btn !== button) {
          btn.classList.remove("active");
        }
      });

      // Toggle current dropdown
      menu.classList.toggle("show");
      button.classList.toggle("active");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    document.querySelectorAll(".publicStyleList").forEach((menu) => {
      menu.classList.remove("show");
    });

    document.querySelectorAll(".btnDropdown").forEach((btn) => {
      btn.classList.remove("active");
    });
  });
});
console.log("new");
