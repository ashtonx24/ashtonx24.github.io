document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      setTimeout(() => {
        form.reset();
      }, 500);
    });
  });
  