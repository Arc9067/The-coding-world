const btn = document.querySelector(".toggle");
const nav = document.querySelector(".nav-open");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav-height");
  if (nav.classList.contains("nav-height")) {
    open.style.display = "none";
    close.style.display = "block";
  } else {
    open.style.display = "block";
    close.style.display = "none";
  }
});
