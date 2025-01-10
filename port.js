// Select all cards
const cards = document.querySelectorAll('.card');

// Set up the Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add