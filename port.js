// Select all cards
const cards = document.querySelectorAll('.card');

// Set up the Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Skip the first card (Portfolio)
      if (entry.isIntersecting && entry.target !== cards[0]) {
        // Add the 'active' class when the card is in view
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the card is visible
);

// Observe each card except the first one
cards.forEach((card, index) => {
  if (index !== 0) observer.observe(card);
});

const connect = document.querySelector('.connect');
const connectlink = document.querySelector('.connectlink');

// Toggle the visibility of the connectlink div on click
connect.addEventListener('click', (event) => {
  event.preventDefault();
  connectlink.classList.toggle('active');
});

// Close the connectlink if the user clicks outside it
document.addEventListener('click', (event) => {
  if (!connectlink.contains(event.target) && !connect.contains(event.target)) {
    connectlink.classList.remove('active');
  }
});

const about = document.querySelector('.about');
const aboutlink = document.querySelector('.aboutlink');

// Toggle the visibility of the connectlink div on click
about.addEventListener('click', (event) => {
  event.preventDefault();
  aboutlink.classList.toggle('active');
});

// Close the connectlink if the user clicks outside it
document.addEventListener('click', (event) => {
  if (!aboutlink.contains(event.target) && !about.contains(event.target)) {
    aboutlink.classList.remove('active');
  }
});

