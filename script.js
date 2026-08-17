const fras = [
  'snano zekaban fu unja zelehti.',
  'storing my github projects here.',
  'bratulača! davi bli plusvinr!',
];

let cIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
  if (window.twemoji) {
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg'
    });
  }
  
  const hFras = document.querySelector('.page-header p');
  if (hFras) {
    setInterval(() => {
      hFras.classList.add('fade-out');
      setTimeout(() => {
        cIndex = (cIndex + 1) % fras.length;
        hFras.textContent = fras[cIndex];
        hFras.classList.remove('fade-out');
      }, 400);
    }, 4000);
  }

  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  document.body.appendChild(tooltip);

  const gap = 12;

  document.addEventListener('pointermove', (e) => {
    const target = e.target.closest('[mahaklar]');

    if (target) {
      tooltip.textContent = target.getAttribute('mahaklar');
      tooltip.classList.add('visible');

      let x = e.clientX;
      let y = e.clientY - gap;

      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    } else {
      tooltip.classList.remove('visible');
    }
  });

  const pageHeader = document.querySelector('.page-header');
  const profileModal = document.getElementById('profileModal');
  const profileClose = document.getElementById('profileClose');

  function openProfile() {
    if (profileModal) {
      profileModal.classList.add('active');
      profileModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeProfile() {
    if (profileModal) {
      profileModal.classList.remove('active');
      profileModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (pageHeader) {
    pageHeader.addEventListener('click', openProfile);
    pageHeader.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProfile();
      }
    });
  }

  if (profileClose) {
    profileClose.addEventListener('click', closeProfile);
  }

  if (profileModal) {
    profileModal.addEventListener('click', (e) => {
      if (e.target === profileModal) {
        closeProfile();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProfile();
    }
  });
});
