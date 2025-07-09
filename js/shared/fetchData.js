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
}

Promise.all([
  fetch("shared/header.html").then((res) => res.text()),
  fetch("shared/navbarMobile.html").then((res) => res.text()),
]).then(([headerHtml, navbarHtml]) => {
  document.getElementById("header").innerHTML = headerHtml;
  document.getElementById("navbarMobile").innerHTML = navbarHtml;

  setTimeout(setupDropdowns, 0);
});

fetch("shared/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
