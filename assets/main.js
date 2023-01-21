// Capturarr el div del html destinos
const divDestinos = document.querySelector(".divdestinos");
// Capturar card destino que se ingresa mediante js
const cardContainer = document.querySelector(".card-destino");
// capturar boton comprar de cards
const boton = document.getElementById(`agregar$(destino.id)`);
// capturar logo del carro
const logoCarro = document.querySelector(".cart-icon");
// capturar div del carro de compras
const divCarro = document.querySelector(".divcarro");
// capturar navbarlist responsive
const menuResponsive = document.querySelector(".navbar-list");
// capturar logo menu hamburguesa
const logoMenuResponsive = document.querySelector(".menu-icon");

// LocalStorage
// BUSCAR Y GUARDAR EN localStorage(carrito)
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const saveLocalStorage = (cartList) => {};
localStorage.setItem("cart", JSON.stringify(cartList));

// Renderizar destinos por categoria
const renderizarCards = (categoria = undefined) => {
  if (!categoria) {
    divDestinos.innerHTML = destinosTodos.join("");
    return;
  }
  const destinosFiltrados = destinosList.filter((destino) => {
    return destino.categoria === categoria;
  });
  divDestinos.innerHTML = destinosFiltrados.map().join("");
};
const init = () => {
  renderizarCards();
};

init();

// // Renderizar sin categoria
// const renderizarTodos = () => {
//   divDestinos.innerHTML = destinos.join("");
// };
// Renderizar Menu Hamburguesa
const mostrarMenuResp = () => {
  menuResponsive.classList.toggle("open-menu");
};

// logoMenuResponsive.addEventListener("click", mostrarMenuResp);
