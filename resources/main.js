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
    let text = "Designed by Anthony";
    let target = document.getElementById("effect");
    let index = 0;

    function effect(index = 0) {
        if (index < text.length) {
            let randomBinary = Math.random() < 0.5 ? "0" : "1";
            target.innerHTML += randomBinary;

            setTimeout(() => {
                target.innerHTML = target.innerHTML.slice(0, -1) + text[index];
                effect(index + 1);
            }, 100);
        } else {
            setTimeout(() => {
                eraseEffect(text.length - 1);
            }, 2000);
        }
    }

    function eraseEffect(index) {
        if (index >= 0) {
            target.innerHTML = target.innerHTML.slice(0, -1);
            setTimeout(() => eraseEffect(index - 1), 50);
        } else {
            setTimeout(() => effect(0), 500);
        }
    }

    effect();
});
