// Select all cards
const cards = document.querySelectorAll('.card');

// Set up the Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'active' class when the card is in view
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the card is visible
);

// Observe each card
cards.forEach((card) => observer.observe(card));
