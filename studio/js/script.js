// Image slider functionality
document.querySelectorAll('.image-slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const slides = container.querySelectorAll('.slide');
    let current = 0;
  
    const updateSlide = () => {
      slider.style.transform = `translateX(-${current * 100}%)`;
    };
  
    container.querySelector('.prev').addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlide();
    });
  
    container.querySelector('.next').addEventListener('click', () => {
      current = (current + 1) % slides.length;
      updateSlide();
    });
  
    updateSlide();
  });
  
  // Load model data (JSON)
  async function loadModelData() {
    try {
      const res = await fetch('data/models.json');
      const models = await res.json();
      console.log(models);
      // You can display them dynamically if needed
    } catch (err) {
      console.error('Failed to load model data:', err);
    }
  }
  
  loadModelData();
  
  // Store last visit
  localStorage.setItem("lastVisit", new Date().toISOString());
  