const element = document.querySelector('.body');

window.addEventListener('scroll', () => {
  // Sayfa kaydırıldıkça scrollY değeri artar, bu değeri arka plan rengiyle ilişkilendiriyoruz
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Arka plan rengini, kaydırma yüzdesine göre değiştiriyoruz
  const hue = (scrollY / maxScroll) * 360; // 0 ile 360 arasında bir renk tonu alacak
  const saturation = 100; // %100 doygunluk, yani canlı bir renk
  const lightness = 50; // %50 parlaklık, orta tonlarda bir renk

  const backgroundColor = "background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255, 182, 212, 0.8) 100%);"
  element.style.backgroundColor = backgroundColor;
});