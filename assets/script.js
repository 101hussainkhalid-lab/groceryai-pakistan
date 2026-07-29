document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent.includes('Generate')) {
      btn.textContent = 'List ready';
    }
  });
});
