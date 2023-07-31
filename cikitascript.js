document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const scrollhalfpage = window.innerHeight / 2;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollhalfpage) {
            const background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255, 182, 212, 0.8) 100%)";
            body.style.background = background;
        }
    });
});