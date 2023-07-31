document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const maxheight = (body.scrollHeight - window.innerHeight) / 3;

    window.addEventListener('scroll', () => {
        if (window.scrollY > (maxheight * 2) ) {
            body.style.backgroundColor = "#ffe700";
        }
        else if (window.scrollY > (maxheight * 1)) {
            body.style.backgroundColor = "#ff0000";
        }
        else {
            body.style.backgroundColor = "";
        }
    });
});