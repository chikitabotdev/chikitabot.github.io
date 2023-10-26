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
fetch('https://api.cikita.chikitabot.net:58731/api/archivecikita')
  .then(response => response.json())
  .then(data => {
    // JSON verilerini işleme
    for (let i = 0; i < data.length; i++) {
      const row = data[i];

        console.log(row.link);
        // 1. Ana galeri div elementini oluşturun
        var galleryDiv = document.createElement("div");
        galleryDiv.classList.add("gallery");

        // 2. 'a' elementini oluşturun ve href özelliği ekleyin
        var linkElement = document.createElement("a");
        linkElement.setAttribute("target", "_blank");
        linkElement.setAttribute("href", row.link);

        // 3. 'img' elementini oluşturun ve src ve alt özelliklerini ekleyin
        var imgElement = document.createElement("img");
        imgElement.setAttribute("src", row.link);
        imgElement.setAttribute("alt", row.id);

        // 4. Açıklama div elementini oluşturun ve içeriğini ekleyin
        var descDiv = document.createElement("div");
        descDiv.classList.add("desc");
        descDiv.textContent = row.id;

        // Elementleri birleştirin
        linkElement.appendChild(imgElement);
        galleryDiv.appendChild(linkElement);
        galleryDiv.appendChild(descDiv);

        // Sonuç galeri div elementini belirtilen bir ana elemente ekleyin
        var anaElement = document.querySelector(".cikitagallery");
        anaElement.appendChild(galleryDiv); // Galeri div'i ana elemente ekleyin
        
    }
  })
  .catch(error => {
    console.error('Veriler alınırken hata oluştu:', error);
  });

});


