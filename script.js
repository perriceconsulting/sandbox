document.querySelectorAll('[data-action="toggle"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target.paused) {
      target.play();
      btn.textContent = 'Pause';
      btn.classList.add('playing');
    } else {
      target.pause();
      btn.textContent = 'Play';
      btn.classList.remove('playing');
    }
  });
});
