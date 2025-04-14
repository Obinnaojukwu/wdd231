export function initSliders() {
    let sliders = document.querySelectorAll(".image-slider-container .slider");
    let indexes = new Array(sliders.length).fill(0);

    function showSlide(sliderIndex) {
        sliders[sliderIndex].style.transform = `translateX(${-indexes[sliderIndex] * 100}%)`;
    }

    function nextSlide(sliderIndex) {
        indexes[sliderIndex] = (indexes[sliderIndex] + 1) % 3;
        showSlide(sliderIndex);
    }

    function prevSlide(sliderIndex) {
        indexes[sliderIndex] = (indexes[sliderIndex] - 1 + 3) % 3;
        showSlide(sliderIndex);
    }

    document.querySelectorAll(".image-slider-container").forEach((sliderContainer, sliderIndex) => {
        sliderContainer.querySelector(".prev").addEventListener("click", () => prevSlide(sliderIndex));
        sliderContainer.querySelector(".next").addEventListener("click", () => nextSlide(sliderIndex));
    });
}
