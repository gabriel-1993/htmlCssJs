// capturar navbarlist responsive
const menuResponsive = document.querySelector(".navbar-list");
// capturar logo menu hamburguesa
const logoMenuResponsive = document.querySelector(".menu-icon");

// Renderizar Menu Hamburguesa
const mostrarMenuResp = () => {
  menuResponsive.classList.toggle("open-menu");
};

logoMenuResponsive.addEventListener("click", mostrarMenuResp);
