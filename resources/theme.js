document.addEventListener('DOMContentLoaded', function() {
    let themetoggle = document.getElementById("theme-button");
    themetoggle.classList.remove("off");
    themetoggle.addEventListener("click", () => {
        if (localStorage.getItem("light") == 'true') {
            localStorage.setItem("light", 'false');
            document.body.classList.remove("light-mode");
            themetoggle.textContent = "🌙";
        } else {
            localStorage.setItem("light", 'true');
            document.body.classList.add("light-mode");
            themetoggle.textContent = "☀️";  
        }
    });
    
    let savedtheme = localStorage.getItem("light");
    if (savedtheme === 'true') {
        document.body.classList.add("light-mode");
        themetoggle.textContent = "☀️";
    }
});
