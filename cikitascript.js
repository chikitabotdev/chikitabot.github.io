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
function changeColorbutton() {
    document.getElementById('change-on-hover-button').style.backgroundColor = '#595b5d2e';
  }
  function changeColoricon() {
    document.getElementById('change-on-hover-icon').style.color = '#454545';
  }