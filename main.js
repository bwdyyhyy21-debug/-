const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// فتح / غلق القائمة
hamburger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// إظهار الهامبرجر بعد السكروول
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("show-hamburger");
  } else {
    document.querySelector("header").classList.remove("show-hamburger");
  }
});