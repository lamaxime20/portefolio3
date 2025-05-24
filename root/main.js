// Menu toggle
const navLinks = document.getElementById("nav_links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

// Fermer le menu après un clic sur un lien
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  }
});

// Options de ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Initialisation de ScrollReveal
const sr = ScrollReveal();

// header container
sr.reveal(".header_content h1", {
  ...scrollRevealOption,
});

sr.reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal(".header_content .header_btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
sr.reveal(".about_content .section_header", {
  ...scrollRevealOption,
});

sr.reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal(".about_content .about_btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
sr.reveal(".service_card", {
  ...scrollRevealOption,
  interval: 200,
});

// portfolio container
sr.reveal(".portfolio_card", {
  ...scrollRevealOption,
  interval: 200,
});
