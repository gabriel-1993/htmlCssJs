// Capturarr el div del html destinos
const divDestinos = document.querySelector(".divdestinos");
// Capturar card destino que se ingresa mediante js
const cardContainer = document.querySelector(".card-destino");
// capturar boton comprar de cards
const boton = document.getElementById(`agregar$(destino.id)`);
// capturar logo del carro
const logoCarro = document.querySelector(".cart-icon");
// capturar div general del carro de compras
const divCarro = document.querySelector(".divcarro");
// capturar div para renderizar cards en el carrito
const cartContainer = document.querySelector(".cart-container");
// capturar el total del carrito
const precioTotal = document.querySelector(".total");
// capturar navbarlist responsive
const menuResponsive = document.querySelector(".navbar-list");
// capturar logo menu hamburguesa
const logoMenuResponsive = document.querySelector(".menu-icon");
// Html colection de los botones de categorias
const btnsCategorias = document.querySelector(".categorias");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");

const listaCategorias = document.querySelectorAll(".category");

// LocalStorage
// BUSCAR Y GUARDAR EN localStorage(carrito)
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

// Renderizar destinos por categoria ,si no hay categoria renderizar todos.
const renderizarCards = (category = undefined) => {
  if (!category) {
    divDestinos.innerHTML = destinosTodos.join("");
    return;
  }
  renderFilteredProducts(category);
};

// Productos filtrados
const renderFilteredProducts = (category) => {
  const productsList = destinosList.filter((product) => {
    return product.category === category;
  });
  divDestinos.innerHTML = productsList.map(cardTemplate).join("");
};

// Cambiar de color el boton seleccionado en categorias
const pintarBtnSelec = (categoriaSeleccionada) => {
  const arrayCategorias = [...listaCategorias];
  arrayCategorias.forEach((categoriaBtn) => {
    if (categoriaBtn.dataset.category !== categoriaSeleccionada) {
      categoriaBtn.classList.remove("active");
      return;
    }
    categoriaBtn.classList.add("active");
  });
};

const changeFilterState = (e) => {
  const categoriaSeleccionada = e.target.dataset.category;
  pintarBtnSelec(categoriaSeleccionada);
};

// AplicarFiltro

const aplicarFiltro = (e) => {
  console.log(e.target.dataset.category);
  if (!e.target.classList.contains("category")) {
    return;
  } else {
    changeFilterState(e);
  }
  if (!e.target.dataset.category) {
    divDestinos.innerHTML = "";
    renderizarCards();
  } else {
    renderizarCards(e.target.dataset.category);
  }
};
// Renderizar Carro de compras
const mostrarCarro = () => {
  divCarro.classList.toggle("open-cart");
  if (menuResponsive.classList.contains("open-menu")) {
    menuResponsive.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};
// Renderizar Menu Hamburguesa
const mostrarMenuResp = () => {
  menuResponsive.classList.toggle("open-menu");
  if (divCarro.classList.contains("open-cart")) {
    divCarro.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Ocultar Menu si hacemos click en un enlace
const ocultarMenuClickEnlace = (e) => {
  if (!e.target.classList.contains("navbar-a")) {
    return;
  }
  menuResponsive.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// Ocultar Menu o Carrito si scrolleamos
const ocultarOnScroll = (e) => {
  if (
    menuResponsive.classList.contains("open-menu") ||
    divCarro.classList.contains("open-cart")
  ) {
    menuResponsive.classList.remove("open-menu");
    divCarro.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};
// Ocultar Menu o Carrito si hacemos click fuera del que estemos

const ocultarOnClickAfuera = () => {
  menuResponsive.classList.remove("open-menu");
  divCarro.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

// Renderizar cards en el carrito(template de las cards)
const templateCardCarro = (card) => {
  const { id, nombre, imagen, precio, descripcion, category } = cartDestino;
  return `
  <div class="cart-item">
  <img
    src=${img}
    alt="paisaje"
    class="carro-imgvene"
  />
  <div class="item-info">
    <div class="item-bid-info">
      <h3 class="item-title">${nombre}</h3>
      <p class="item-bid">${descripcion}</p>
      <p class="item-bid">1 Persona</p>
    </div>
    <div class="item-bid-price">
      <span class="item-price">${precio}</span>
    </div>
  </div>
  <div class="item-handler">
    <span class="quantity-handler down btn-" data-id=${id}>-</span>
    <span class="quantity-handler cant-per">${quantity}</span>
    <span class="quantity-handler up btn" data-id=${id}>+</span>
  </div>
</div>
<span class="divider"></span>
<div class="card-total">
  <p>Total</p>
  <span>$845</span>
</div>
<button class="btn-add btn">Confirmar compra</button>
</div>
  `;
};

// renderizar las cards con el template anterior, si el carrito esta vacio mostrar msj
const renderCardCarrito = () => {
  if (!cart.lenght) {
    cartContainer.innerHTML = `<p class="pCarroVacio"> No hay productos en el carrito.</p>`;
    return;
  }
  cartContainer.innerHTML = cart.map(templateCardCarro).join("");
};

// Precio del total en el carrito
const totalCarrito = () => {
  return cart.reduce((acc, cur) => {
    return acc + Number(cur.precio) * cur.quantity;
  }, 0);
};

// Mostrar el total en el carrito
const showTotal = () => {
  total.innerHTML = `$${totalCarrito().toFixed(2)}`;
};

const init = () => {
  renderizarCards();
  btnsCategorias.addEventListener("click", aplicarFiltro);
  logoMenuResponsive.addEventListener("click", mostrarMenuResp);
  logoCarro.addEventListener("click", mostrarCarro);
  menuResponsive.addEventListener("click", ocultarMenuClickEnlace);
  window.addEventListener("scroll", ocultarOnScroll);
  overlay.addEventListener("click", ocultarOnClickAfuera);
  document.addEventListener("DOMContentLoaded", renderCardCarrito);
  document.addEventListener("DOMContentLoaded", showTotal);
};

init();
