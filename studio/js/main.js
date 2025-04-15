import { initSliders } from './sliders.js';
import { loadModelData } from './modelData.js';
import { setupModal } from './modal.js';

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".hero-content h1, .hero-content p, .model-details, .card")
        .forEach((el, i) => {
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.transition = "opacity 1.5s ease-in-out";
                el.style.opacity = "1";
            }, i * 300);
        });


    document.querySelectorAll(".mona, .lisa, .logo-subtext").forEach(el => {
        el.style.opacity = "1";
    });


    initSliders();
    loadModelData();
    setupModal();


    localStorage.setItem("lastVisit", new Date().toISOString());
});

window.addEventListener("load", () => {
    document.querySelector(".preloader")?.classList.add("hidden");
});
