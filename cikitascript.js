document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const maxheight = body.scrollHeight - window.innerHeight

    window.addEventListener('scroll', () => {
        if (window.scrollY > (maxheight * 0.75) ) {
            body.style.backgroundColor = "#ffe700";
        }
        else if (window.scrollY > (maxheight * 0.5)) {
            body.style.backgroundColor = "#ff0000";
        }
        else {
            body.style.backgroundColor = "";
        }
    });
});