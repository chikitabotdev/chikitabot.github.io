document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', () => {
        const body = document.body;
        const maxheight = (body.scrollHeight - window.innerHeight) / 3;
        if (window.scrollY > (maxheight * 2) ) {
            body.style.backgroundColor = "#ffe700";
        }
        else if (window.scrollY > (maxheight)) {
            body.style.backgroundColor = "#ff0000";
        }
        else {
            body.style.backgroundColor = "";
        }
    });
});
function changeColorBG(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}
function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}   
