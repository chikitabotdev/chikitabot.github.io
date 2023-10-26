
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


