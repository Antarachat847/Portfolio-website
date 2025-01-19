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
