import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll("a");

btnMobileNav.addEventListener("click", () => {
  console.log("Hi");
  header.classList.toggle("nav-open");
});

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href.startsWith("#") && href !== "#") {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    header.classList.remove("nav-open");
  });
});
