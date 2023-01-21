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
// Html colection de los botones de categorias
const btnsCategorias = document.querySelector(".categorias");

// LocalStorage
// BUSCAR Y GUARDAR EN localStorage(carrito)
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// const saveLocalStorage = (cartList) => {};
// localStorage.setItem("cart", JSON.stringify(cartList));

// Renderizar destinos por categoria ,si no hay categoria renderizar todos.
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

// Cambiar de color el boton seleccionado en categorias
const pintarBtnSelec = (categoriaSeleccionada) => {
  const arrayCategorias = [...btnsCategorias];
  arrayCategorias.forEach((categoriaBtn) => {
    if (categoriaBtn.dataset.categoria !== categoriaSeleccionada) {
      categoriaBtn.classList.remove("active");
      return;
    }
    categoriaBtn.classList.add("active");
  });
};

const cambiarCategoria = (e) => {
  const categoriaSeleccionada = e.target.dataset.categoria;
  pintarBtnSelec(categoriaSeleccionada);
};

// Renderizar categoria filtrada

const aplicarFiltro = (e) => {
  if (!e.target.classList.contains("categoria")) {
    return;
  } else {
    cambiarCategoria(e);
  }
  if (!e.target.dataset.categoria) {
    renderizarCards();
  } else {
    renderizarCards(e.target.dataset.categoria);
  }
};

const init = () => {
  renderizarCards();
  btnsCategorias.addEventListener("click", aplicarFiltro);
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
