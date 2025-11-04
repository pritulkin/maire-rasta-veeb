document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.thumb');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbFull'); // ← uuendatud ID
  const lbClose = document.getElementById('lbClose');

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      lbImg.src = src;
      lbImg.alt = btn.querySelector('img').alt || '';
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  

  function close() {
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') close();
  });
});