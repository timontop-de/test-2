// Countdown to 15.06.2025
function updateCountdown() {
  const target = new Date('2025-06-15T00:00:00');
  const now = new Date();
  const diff = target - now;

  const countdown = document.getElementById('countdown');
  if (!countdown) return;

  if (diff <= 0) {
    countdown.textContent = 'Der Tag ist erreicht!';
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `Noch ${days} Tage ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();

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
