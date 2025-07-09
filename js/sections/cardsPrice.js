document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cardContainer");

  if (!container) return;

  let defaultCard = container.querySelector(".cardPrice.defaultCard");

  const activeSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="20" fill="url(#paint0_linear)" />
        <path d="M30 20c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-15.5 0a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2BFFFF"/>
            <stop offset="1" stop-color="#2BFFFF" stop-opacity="0.41"/>
          </linearGradient>
        </defs>
      </svg>
   `;
  const inactiveSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" fill-opacity="0.12"/>
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="url(#paint0_linear_inactive)" />
        <path d="M30 20c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-15.5 0a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear_inactive" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.16"/>
            <stop offset="1" stop-color="white" stop-opacity="0.02"/>
          </linearGradient>
        </defs>
      </svg>
    `;

  function updateActive(card) {
    const cards = container.querySelectorAll(".cardPrice");
    cards.forEach((c) => {
      c.classList.remove("active");
      const box = c.querySelector(".boxCircle");
      if (box) box.innerHTML = inactiveSvg;
    });

    card.classList.add("active");
    const box = card.querySelector(".boxCircle");
    if (box) box.innerHTML = activeSvg;
  }

  // استخدم delegation للمستقبل أيضًا
  container.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".cardPrice");
    if (card && container.contains(card)) {
      updateActive(card);
    }
  });

  container.addEventListener("mouseleave", () => {
    defaultCard = container.querySelector(".cardPrice.defaultCard");
    if (defaultCard) updateActive(defaultCard);
  });

  // أول تفعيل عند تحميل الصفحة
  if (defaultCard) updateActive(defaultCard);
});

// Tabs Code Js
$(document).ready(function () {
  function showTab(tab) {
    if (tab === "سنوي") {
      $(".contentOne").hide();
      $(".contentTwo").show();
    } else {
      $(".contentOne").show();
      $(".contentTwo").hide();
    }

    // 🔁 إعادة تفعيل البطاقة الافتراضية
    setTimeout(() => {
      const container = document.querySelector(".cardContainer");
      if (!container) return;
      const defaultCard = container.querySelector(".cardPrice.defaultCard");
      if (defaultCard) {
        const event = new Event("mouseleave");
        container.dispatchEvent(event);
      }
    }, 100);
  }

  $(".divTabs button").click(function () {
    $(".divTabs button").removeClass("active");
    $(this).addClass("active");
    const tab = $(this).text().trim();
    showTab(tab);
  });

  const initialTab = $(".divTabs .active").text().trim();
  showTab(initialTab);
});
