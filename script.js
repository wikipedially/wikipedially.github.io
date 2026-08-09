const fras = [
  'snano zekaban fu unja zelehti.',
  'storing my github projects here.',
  'bratulača! davi bli plusvinr!'
];

let cIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
  const hFras = document.querySelector('.page-header p');
  if (!hFras) return;

  setInterval(() => {
    hFras.classList.add('fade-out');
    setTimeout(() => {
      cIndex = (cIndex + 1) % fras.length;
      hFras.textContent = fras[cIndex];
      hFras.classList.remove('fade-out');
    }, 400);
  }, 4000);
});
