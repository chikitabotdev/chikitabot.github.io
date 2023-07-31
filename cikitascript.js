document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (window.scrollY > (window.innerHeight / 2)) {
            body.style.backgroundColor = "#ffe700";
        }
        else if (window.scrollY > (window.innerHeight / 4)) {
            body.style.backgroundColor = "#ff0000";
        }
        else {
            body.style.backgroundColor = "";
        }
    });
});