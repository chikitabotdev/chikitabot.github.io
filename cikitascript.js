document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const scrollhalfpage = window.innerHeight / 2;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollhalfpage) {
            body.style.backgroundColor = "#ff0000";
        }
        else {
            body.style.backgroundColor = "";
        }
    });
});