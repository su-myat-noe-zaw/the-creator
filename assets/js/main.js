const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu-items-container");
const menuLinks = document.querySelectorAll(".menu-items-container a");

// review slider
const track = document.querySelector(".review-track");
const cards = document.querySelectorAll(".review-card");
const prevBtn = document.querySelector(".left-arrow-btn");
const nextBtn = document.querySelector(".right-arrow-btn");

document.addEventListener("DOMContentLoaded", async () => {
  const content = document.getElementById("content");

  async function loadSection(file, cssFile) {
    // load section dynamically
    const response = await fetch(`sections/${file}`);
    const html = await response.text();
    content.insertAdjacentHTML("beforeend", html);

    // load css dynamically
    if (cssFile) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `assets/css/${cssFile}`;
      document.head.appendChild(link);
    }
  }

  // load sections
  await loadSection("home.html", "home.css");
  await loadSection("partners.html", "partners.css");
  await loadSection("how-we-work.html", "how-we-work.css");
  await loadSection("review.html", "review.css");
  await loadSection("charity.html", "charity.css");

  const leftBtn = document.querySelector("#review .left-arrow-btn");
  const rightBtn = document.querySelector("#review .right-arrow-btn");
  const slider = document.querySelector("#review .review-slide");

  if (leftBtn && rightBtn && slider) {
    const scrollAmount = 524; // card width + gap

    rightBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }
});

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// close menu when clicking a link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
