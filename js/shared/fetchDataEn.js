function setupDropdowns() {
  const toggleButtons = document.querySelectorAll(".btnDropdown");

  toggleButtons.forEach((button) => {
    const parent = button.closest("div");
    const menu = parent.querySelector(".publicStyleList");

    button.addEventListener("click", function (e) {
      e.stopPropagation();

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

      menu.classList.toggle("show");
      button.classList.toggle("active");
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".publicStyleList").forEach((menu) => {
      menu.classList.remove("show");
    });

    document.querySelectorAll(".btnDropdown").forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  $("#toggle-mode, #toggle-modeMb").click(function () {
    $("body").toggleClass("light-mode");

    if ($("body").hasClass("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  if (localStorage.getItem("theme") === "light") {
    $("body").addClass("light-mode");
  } else {
    $("body").removeClass("light-mode");
  }
}
setupDropdowns();
