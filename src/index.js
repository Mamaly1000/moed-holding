import "./mainpage/index";
import Swiper from "swiper";
import Aos from "aos";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const navbar_items = [
  "درباره ما",
  "تماس با ما",
  "رویدادها",
  "مسابقه",
  "صفحه اصلی",
];
const navbarLinkContainer = document.querySelector(".nav-link-container");

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < navbar_items.length; i++) {
    const element = document.createElement("a");
    element.setAttribute("class", "nav-link");
    element.setAttribute("href", "#");
    if (navbar_items[i] === "صفحه اصلی") {
      element.style.opacity = 1;
      element.style.fontWeight = 900;
    }
    element.style.animationDelay = `${i / 10 + 0.1}s`;
    element.innerText = navbar_items[i];
    1;
    navbarLinkContainer.appendChild(element);
  }
});

const swiper = new Swiper(".series-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  modules: [Pagination, Navigation, Autoplay],
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const language_component = ` 
<button
  class="w-full flex flex-row-reverse justify-start items-center gap-4"
>
  <img src="./assets/mainpage/navbar/english.svg" />
  <div class="flex flex-col justify-start items-center">
    <span class="font-extrabold capitalize">english</span>
    <span class="font-extralight text-text">انگلیسی</span>
  </div>
</button>
<button
  class="w-full flex flex-row-reverse justify-start items-center gap-4"
>
  <img src="./assets/mainpage/navbar/persian.svg" />
  <div class="flex flex-col justify-start items-center">
    <span class="font-extrabold capitalize">فارسی</span>
    <span class="font-extralight text-text">persian</span>
  </div>
</button> `;
let selectLanguage = false;
const select_language_btn = document.getElementById("select-language");
const language_component_element = document.createElement("div");
language_component_element.setAttribute(
  "class",
  "language-container flex flex-col justify-center items-center gap-2 drop-shadow-2xl p-5 z-50"
);
language_component_element.innerHTML = language_component;
select_language_btn.addEventListener("click", () => {
  if (selectLanguage) {
    navbarLinkContainer.removeChild(language_component_element);
    selectLanguage = false;
  } else {
    navbarLinkContainer.appendChild(language_component_element);
    selectLanguage = true;
  }
});
window.addEventListener("DOMContentLoaded", () => {
  Aos.init();
});
