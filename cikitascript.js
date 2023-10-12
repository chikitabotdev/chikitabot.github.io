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
            var uyesayisi = responseJSON.member_count;
            document.getElementsByClassName("member-number")[0].innerHTML = formatNumber(uyesayisi);
            var serversayisi = responseJSON.server_count;
            document.getElementsByClassName("server-number")[0].innerHTML = formatNumber(serversayisi);
        }
      };
    

  });

req.open("GET", "https://api.cikita.chikitabot.net:58731/api/server_count", true);
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

const elementmove = document.querySelector('.cikitaimg'),
      elementmove1 = document.querySelector('.sparkle.pink'),
      elementmove2 = document.querySelector('.sparkle.blue'),
      root = document.documentElement;

root.addEventListener('mousemove', (e) => {
  const x = e.clientX,
        y = e.clientY;
  elementmove.style.transform = `translate(${-x / 50}px,${-y / 100}px)`;
  elementmove1.style.transform = `translate(${-x / 40}px,${-y / 80}px)`;
  elementmove2.style.transform = `translate(${-x / 30}px,${-y / 60}px)`;
});


const resim = document.getElementById('.sparkle.blue');
let scale = 1; // Başlangıç ölçeği

function zoomInAndOut() {
  if (scale >= 1.2) {
    // Eğer ölçek 1.2'den büyük veya eşitse küçültmeye başla
    scale = 1.2;
    direction = -0.02; // Küçültme yönde
  } else if (scale <= 1) {
    // Eğer ölçek 1'den küçük veya eşitse büyütmeye başla
    scale = 1;
    direction = 0.02; // Büyütme yönde
  }

  scale += direction; // Yöne göre ölçeği güncelle
  resim.style.transform = `scale(${scale})`; // Resmi ölçeklendir

  // İşlemi her 10 milisaniyede bir tekrarla
  requestAnimationFrame(zoomInAndOut);
}

let direction = 0.02; // Başlangıç yönde (büyütme)

// Her 1000 milisaniyede bir büyütme ve küçültme işlemini başlat
setInterval(zoomInAndOut, 1000);




