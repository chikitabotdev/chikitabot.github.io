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


document.addEventListener('DOMContentLoaded', function() {
// JSON verilerini almak için bir GET isteği yapın
var currentURL = window.location.href;
var plush = "cikita";
// Belirli bir site adına göre koşul yapma
if (currentURL.includes("https://chikitabot.net/archive/chikita/")) {
    // "example.com" sitesi için özel işlemleri burada gerçekleştirin
    plush = "cikita";
} else if (currentURL.includes("https://chikitabot.net/tr/archive/chikita/")) {
  // "another-site.com" sitesi için özel işlemleri burada gerçekleştirin
  plush = "cikita";
} else if (currentURL.includes("https://chikitabot.net/archive/fumo/")) {
    // "another-site.com" sitesi için özel işlemleri burada gerçekleştirin
    plush = "fumo";
} else if (currentURL.includes("https://chikitabot.net/tr/archive/fumo/")) {
  // "another-site.com" sitesi için özel işlemleri burada gerçekleştirin
  plush = "fumo";
}else {
    // Diğer durumlar için varsayılan işlemleri burada gerçekleştirin
    console.log("Belirtilen sitelerden herhangi birinde değilsiniz.");
}
fetch('https://api.cikita.chikitabot.net:58731/api/archive' + plush)
  .then(response => response.json())
  .then(data => {
    // JSON verilerini işleme
    // URL'deki query string parametreleri al
    const queryString = window.location.search;

    // query string'i ayrıştır
    const urlParams = new URLSearchParams(queryString);

    // İstenen parametreyi al
    const id = urlParams.get('id');
    // Parametrelerin varlığını kontrol et

    function chikitafoto(link, id) {
            // 1. Ana galeri div elementini oluşturun
            var galleryDiv = document.createElement("div");
            galleryDiv.classList.add("gallery");
    
            // 2. 'a' elementini oluşturun ve href özelliği ekleyin
            var linkElement = document.createElement("a");
            linkElement.setAttribute("target", "_blank");
            linkElement.setAttribute("href", link);
    
            // 3. 'img' elementini oluşturun ve src ve alt özelliklerini ekleyin
            var imgElement = document.createElement("img");
            imgElement.setAttribute("src", link);
            imgElement.setAttribute("alt", id);
    
            // 4. Açıklama div elementini oluşturun ve içeriğini ekleyin
            var descDiv = document.createElement("div");
            descDiv.classList.add("desc");
            descDiv.textContent = id;
    
            // Elementleri birleştirin
            linkElement.appendChild(imgElement);
            galleryDiv.appendChild(linkElement);
            galleryDiv.appendChild(descDiv);
    
            // Sonuç galeri div elementini belirtilen bir ana elemente ekleyin
            var anaElement = document.querySelector(".cikitagallery");
            anaElement.appendChild(galleryDiv); // Galeri div'i ana elemente ekleyin
    }


    if (id) {
      if (id == "random"){
        var random = Math.floor(Math.random() * data.length);
        chikitafoto(data[random].link, data[random].id);
      }
      else {
        for (let i = 0; i < data.length; i++) {
          const row = data[i];
          if (id == row.id) {
              chikitafoto(row.link, row.id);
          }
        }
      }

    } else {

    for (let i = 0; i < data.length; i++) {
      const row = data[i];

       chikitafoto(row.link, row.id);
        
    }
    // 1. HTML elementini seçin
    var container = document.querySelector(".cikitagallery");

    // 2. Çocukları bir diziye dönüştürün
    var children = Array.from(container.children);

    // 3. Diziyi karıştırın
    children.sort(function() {
        return 0.5 - Math.random();
    });

    // 4. Karıştırılmış diziyi HTML elementine yeniden ekleyin
    for (var i = 0; i < children.length; i++) {
        container.appendChild(children[i]);
    }

  }})
  .catch(error => {
    console.error('Veriler alınırken hata oluştu:', error);
  });

});


