document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
  
    if (!lastVisit) {
      messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
      if (daysPassed < 1) {
        messageContainer.textContent = "Back so soon! Awesome!";
      } else {
        messageContainer.textContent = `You last visited ${daysPassed} day${daysPassed > 1 ? 's' : ''} ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', now);
  });
  