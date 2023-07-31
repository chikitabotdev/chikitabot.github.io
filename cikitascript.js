document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const maxheight = body.scrollHeight - window.innerHeight

    window.addEventListener('scroll', () => {
        if (window.scrollY > (maxheight / 2) ) {
            body.style.backgroundColor = "#ff0000";
        }
        else if (window.scrollY > ((maxheight / 2) + (maxheight / 4))) {
            body.style.backgroundColor = "#ffe700";
        }
        else {
            body.style.backgroundColor = "";
        }
    });
});