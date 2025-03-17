document.addEventListener('DOMContentLoaded', function() {
let sections = document.querySelectorAll('section');
let isCooldown = false;

sections.forEach(section => {
  section.addEventListener('click', () => {
    if (isCooldown) return;
    section.classList.toggle('fullscreen');
    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
    }, 1000);
  });
});
});
