// 1. Ana galeri div elementini oluşturun
var galleryDiv = document.createElement("div");
galleryDiv.classList.add("gallery");

// 2. 'a' elementini oluşturun ve href özelliği ekleyin
var linkElement = document.createElement("a");
linkElement.setAttribute("target", "_blank");
linkElement.setAttribute("href", "img_5terre.jpg");

// 3. 'img' elementini oluşturun ve src ve alt özelliklerini ekleyin
var imgElement = document.createElement("img");
imgElement.setAttribute("src", "img_5terre.jpg");
imgElement.setAttribute("alt", "Cinque Terre");

// 4. Açıklama div elementini oluşturun ve içeriğini ekleyin
var descDiv = document.createElement("div");
descDiv.classList.add("desc");
descDiv.textContent = "Add a description of the image here";

// Elementleri birleştirin
linkElement.appendChild(imgElement);
galleryDiv.appendChild(linkElement);
galleryDiv.appendChild(descDiv);

// Sonuç galeri div elementini belirtilen bir ana elemente ekleyin
var anaElement = document.querySelector(".cikitagallery");
anaElement.appendChild(galleryDiv); // Galeri div'i ana elemente ekleyin
