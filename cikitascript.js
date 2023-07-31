const element = document.querySelector('.body');

window.addEventListener('scroll', () => {
  // Sayfa kaydırıldıkça scrollY değeri artar, bu değeri arka plan rengiyle ilişkilendiriyoruz
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const background = "background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255, 182, 212, 0.8) 100%);"
  element.style.background = background;
});