// Initialize Feather Icons
// YEH LINE NAYE ICONS (SEND, GITHUB, ETC.) KO RENDER KAREGI
feather.replace();

// Hamburger Menu Toggle with Animation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const hamburgerTop = document.getElementById("hamburger-top");
const hamburgerMiddle = document.getElementById("hamburger-middle");
const hamburgerBottom = document.getElementById("hamburger-bottom");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  const isOpen = !navLinks.classList.contains("hidden");

  // SVG ko 'X' banane ka animation
  hamburgerTop.setAttribute("d", isOpen ? "M6 6L18 18" : "M4 6h16");
  hamburgerMiddle.style.opacity = isOpen ? "0" : "1";
  hamburgerBottom.setAttribute("d", isOpen ? "M6 18L18 6" : "M4 18h16");
});