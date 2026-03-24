export function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const overlay = document.getElementById('menuOverlay');
  if (!burger || !overlay) return;
  burger.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    burger.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  overlay.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      overlay.classList.remove('open');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}
