document.addEventListener("DOMContentLoaded", function() {
    
    const nextModelLink = document.getElementById("nextModel");

    nextModelLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Navigating to the next model...");
        window.location.href = "next-model.html"; 
    });

    
    const fadeInElements = document.querySelectorAll(".hero-content h1, .hero-content p, .model-details, .card");
    fadeInElements.forEach((el, index) => {
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.transition = "opacity 1.5s ease-in-out";
            el.style.opacity = "1";
        }, index * 300);
    });
    
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
});


window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".mona, .lisa, .logo-subtext").forEach(el => {
        el.style.opacity = "1";
    });
});


  
  async function loadModelData() {
    try {
      const res = await fetch('data/model.json');
      const models = await res.json();
      console.log(models);
      
    } catch (err) {
      console.error('Failed to load model data:', err);
    }
  }
  
  loadModelData();
  
  
  localStorage.setItem("lastVisit", new Date().toISOString());
  