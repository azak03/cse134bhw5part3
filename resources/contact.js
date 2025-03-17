document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById("contactform");
    let comments = document.getElementById("comments");
    let counter = document.getElementById("counter");
    let formerrors = {};
    formerrors['name'] = [];
    formerrors['email'] = [];
    formerrors['comments'] = [];
    let erroroutput = document.getElementsByClassName("error-message")[0];  
    document.querySelectorAll("input[pattern]").forEach(field => {
    let pattern = new RegExp(field.pattern);
    field.addEventListener("input", (e) => {
        if (!pattern.test(e.target.value) && e.target.value.length > 0) {
            formerrors[field.name].push("Bad character: " + e.data);
            e.target.classList.add("flash");
            erroroutput.textContent = `Rejected character in ${field.name} field!`;
            erroroutput.classList.add("fade");
            setTimeout(() => {
                e.target.classList.remove("flash");
                erroroutput.classList.remove("fade");
            }, 1000);
            e.target.value = e.target.value.slice(0, -1);
        }
        });
    });
    comments.addEventListener("input", () => {
        let remaining = 500 - comments.value.length;
        counter.textContent = `${remaining} characters remaining`;
        if (remaining <= 50) {
              if (remaining <= 0) {
                if(remaining < 0) {
                    formerrors["comments"].push("Length exceeded");
                }
                if (counter.classList.contains("warn")) {
                    counter.classList.remove("warn");
                }
                counter.classList.add("error");
            } else {
                if (counter.classList.contains("error")) {
                    counter.classList.remove("error");
                }
                counter.classList.add("warn");
            }
        } else {
            if (counter.classList.contains("warn")) {
                counter.classList.remove("warn");
            }
            if (counter.classList.contains("error")) {
                counter.classList.remove("error");
            }
        }
    });
    form.addEventListener("submit", (e) => {
        document.getElementById("form-errors").value = JSON.stringify(formerrors);
        document.getElementsByClassName("info-message")[0].classList.add("fade");
    });
});
