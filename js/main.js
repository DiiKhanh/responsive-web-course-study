const header = document.querySelector(".header");
const toTop = document.querySelector(".backtop");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  toTop.classList.toggle("showback", window.pageYOffset > 100);
});

const btn = document.querySelector("#menu-icon");
const menu = document.querySelector(".header__navbar");

btn.onclick = () => {
  btn.classList.toggle("bx-x");
  menu.classList.toggle("open");
};

window.onscroll = () => {
  btn.classList.remove("bx-x");
  menu.classList.remove("open");
};

const scrollRe = ScrollReveal({
  distance: "25px",
  duration: 2500,
  reset: true,
});

scrollRe.reveal(".home__content", { delay: 180, origin: "bottom" });
scrollRe.reveal(".categories,.about,.courses,.contact", {
  delay: 200,
  origin: "bottom",
});
