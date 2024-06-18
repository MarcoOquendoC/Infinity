function toggleMenu() {
  const menuItems = document.getElementById('menu-items');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (menuItems.style.display === 'flex') {
    menuItems.style.display = 'none';
  } else {
    menuItems.style.display = 'flex';
  }
  hamburgerMenu.classList.toggle('change');
}
