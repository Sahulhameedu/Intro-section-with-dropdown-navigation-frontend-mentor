document.addEventListener('DOMContentLoaded', function() {
  // Your code here


const navLinks = document.querySelectorAll(".navigation_links li");
const menuBtn = document.querySelector(".mobile_menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
const overflow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".mobile_links li");

menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile_menu_btn img");
  menuBtn.classList.toggle("active-btn"); 
  mobileMenu.classList.toggle("active_menu");
  overflow.classList.toggle("active_menu");
  if (menuBtn.classList.contains("active-btn")) {

    icon.src = "./images/icon-close-menu.svg";
  } else {
    icon.src = "./images/icon-menu.svg";
  }
});

navLinks.forEach((link) => {
  const subMenu = link.querySelector(".sub_menu ");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active_menu");
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".mobile_sub");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active_menu");
  });
});
});