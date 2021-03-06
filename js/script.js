const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    document.querySelector("body").style.overflow = "hidden";
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    document.querySelector("body").style.overflow = "auto";
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);