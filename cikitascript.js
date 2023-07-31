const body = document.body;

window.addEventListener('scroll', () => {
  // Sayfa kaydırıldıkça scrollY değeri artar, bu değeri arka plan rengiyle ilişkilendiriyoruz
  const scrollhalfpage = window.innerHeight / 2;
  
  if (window.scrollY > scrollhalfpage) {
    const background = {"background": "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255, 182, 212, 0.8) 100%)"};
        body.style.background = background;}
});