// Simple scroll animation for project cards
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.project-card');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});
