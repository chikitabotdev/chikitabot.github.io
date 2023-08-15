let req = new XMLHttpRequest();

function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + 'M'; // Milyon
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K'; // Bin
    } else {
      return number.toString(); // Bin ve milyon altındaki sayılar
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            const responseJSON = JSON.parse(req.responseText);
            var uyesayisi = responseJSON.record.member_count;
            document.getElementsByClassName("member-number")[0].innerHTML = formatNumber(uyesayisi);
        }
      };
    

  });

req.open("GET", "https://api.jsonbin.io/v3/b/64d3bd9f9d312622a38e92ca", true);
req.setRequestHeader("X-Access-Key", "$2b$10$2XJVg1rOhV4iNPGb./lCqeU7Du.mF3zaMK68rA7IqBkGjly/nVS8.");
req.send();

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', () => {
        const body = document.body;
        const maxheight = (body.scrollHeight - window.innerHeight) / 4;
        if (window.scrollY > (maxheight) ) {
          document.getElementsByClassName("cikiheader")[0].style.boxShadow = "rgb(1 1 1 / 10%) 0 4px 15px -1px, rgb(0 0 0 / 6%) 0 2px 10px -1px";
        }
        else {
          document.getElementsByClassName("cikiheader")[0].style.boxShadow = "none";
        }
    });
});
function changeColorBG(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}
function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}   
function refreshPage() {
    window.location.reload();
}






