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

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("shared/header.html").then((res) => res.text()),
    fetch("shared/navbarMobile.html").then((res) => res.text()),
    fetch("shared/headerUser.html").then((res) => res.text()),
  ]).then(([headerHtml, navbarHtml, headerUserHtml]) => {
    const header = document.getElementById("header");
    const navbarMobile = document.getElementById("navbarMobile");
    const headerUser = document.getElementById("headerUser");

    if (header) header.innerHTML = headerHtml;
    if (navbarMobile) navbarMobile.innerHTML = navbarHtml;
    if (headerUser) headerUser.innerHTML = headerUserHtml;

    setTimeout(setupDropdowns, 0);
  });
});

fetch("shared/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
