document.addEventListener('DOMContentLoaded', () => {
    fetch('data/interests.json')
      .then(response => response.json())
      .then(interests => {
        const interestsContainer = document.getElementById('interests');
        interests.forEach(interest => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <h2>${interest.name}</h2>
            <figure>
              <img src="${interest.image}" alt="${interest.name}" loading="lazy">
            </figure>
            <address>${interest.address}</address>
            <p>${interest.description}</p>
            <button onclick="location.href='${interest.link}'">Learn More</button>
          `;
          interestsContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error loading interests:', error));
  });
  