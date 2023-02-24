// Capturarr el div del html destinos
const divDestinos = document.querySelector(".divdestinos");
// Capturar card destino que se ingresa mediante js
const cardContainer = document.querySelector(".card-destino");
// capturar boton comprar de cards
const boton = document.getElementById(`agregar$(destino.id)`);
// capturar logo del carro
const logoCarro = document.querySelector(".cart-icon");
// capturar burbuja del carrito
const burbujaCarro = document.querySelector(".carro-burbuja");
// capturar div general del carro de compras
const divCarro = document.querySelector(".divcarro");
// capturar div para renderizar cards en el carrito
const cartContainer = document.querySelector(".cart-container");
// capturar el total del carrito
const precioTotal = document.querySelector(".total");
// capturar boton comprar y vaciar carrito del carrito
const btnComprar = document.querySelector(".btn-buy");
const btnVaciar = document.querySelector(".btn-delete");
// capturar navbarlist responsive
const menuResponsive = document.querySelector(".navbar-list");
// capturar logo menu hamburguesa
const logoMenuResponsive = document.querySelector(".menu-icon");
// Html colection de los botones de categorias
const btnsCategorias = document.querySelector(".categorias");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
// Capturar div para mostrar msj al agregar algo al carrito
const successModal = document.querySelector(".add-modal");

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
const templateCardCarro = (destinoCard) => {
  const { id, nombre, imagen, precio, quantity } = destinoCard;
  return `
  <div class="cart-item">
    <img src=${imagen} alt="paisaje destino del carrito" />
    <div class="item-info">
      <h3 class="item-title">${nombre}</h3>
      <p class="item-bid">7 dias y 6 noches,incluye impuestos, tasas y cargos</p>
      <div class="divPrecioCart"> 
      <p class="pPrecioCart">Precio por persona</p>
      <span class="item-price">$${precio}</span>
      </div>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};

// renderizar las cards con el template anterior, si el carrito esta vacio mostrar msj
const renderCardCarrito = () => {
  if (!cart.length) {
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
  precioTotal.innerHTML = `$${totalCarrito().toFixed(2)}`;
};

// renderizar cantidad en la burbuja del carrito

const renderizarBurbuja = () => {
  burbujaCarro.textContent = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
};

// Mostrar ocultar btn comprar y vaciar del carrito

const desabilitarBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};
// pasar datos a un objeto
const productData = (id, nombre, precio, imagen) => {
  return { id, nombre, precio, imagen };
};
// estado del carrito si algo cambia que se actualize
const estadoCarrito = () => {
  saveLocalStorage(cart);
  renderCardCarrito();
  showTotal();
  desabilitarBtn(btnComprar);
  desabilitarBtn(btnVaciar);
  renderizarBurbuja();
};

// agregar producto al carrito

const agregarAlCarrito = (e) => {
  if (!e.target.classList.contains("btn-add")) {
    return;
  }
  const { id, nombre, precio, imagen } = e.target.dataset;
  const product = productData(id, nombre, precio, imagen);
  if (agregarOaumentarProducto(product)) {
    agregarCantidadCart(product);
    msjAgregadoCarrito("Se agrego una unidad al carrito");
  } else {
    crearCartProduct(product);
    msjAgregadoCarrito("Se agrego al carrito");
  }
  estadoCarrito();
};

// confirmar que el producto no exista en el carrito,si existe, agregar cantidad al existente
const agregarOaumentarProducto = (product) => {
  return cart.find((item) => {
    return item.id === product.id;
  });
};

// agregar cantidad a producto ya existente en el carrito
const agregarCantidadCart = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};
// mostrar mensaje cuando se agrege algo al carrito
const msjAgregadoCarrito = (msj) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msj;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

// crear card si aun no existe en el carrito
const crearCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

// Restar una unidad a un producto en el carrito , si tiene una unidad: preguntar antes de eliminarlo
const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => {
    return item.id === id;
  });
  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto?")) {
      removeProductCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};
// Eliminar producto del carrito al confirmar que se desea eliminar( la funcion esta en una linea por eso permine agregar estadoCarrito al final)
const removeProductCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  estadoCarrito();
};

// Disminuir la cantidad de un producto en el carrito
const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? {
          ...product,
          quantity: Number(product.quantity) - 1,
        }
      : product;
  });
};

// Sumar una unidad a un producto en el carrito
const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => {
    return item.id === id;
  });
  agregarCantidadCart(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  estadoCarrito();
};

// Quitar cards del carrito
const resetearCarrito = (e) => {
  cart = [];
  estadoCarrito();
};

// vaciar el carrito por compra o vaciar carrito(el primer if sirve por si nos eliminan el disabled del boton)
const vaciarOcomprarCarrito = (msjParaConfirmar, msjAlert) => {
  if (!cart.length) return;
  if (window.confirm(msjParaConfirmar)) {
    resetearCarrito();
    alert(msjAlert);
  }
};

const completarCompra = () => {
  vaciarOcomprarCarrito(
    "¿Desea confirmar su compra?",
    "¡Gracias por su compra!"
  );
};

const borrarProductosCarrito = () => {
  vaciarOcomprarCarrito(
    "¿Desea eliminar todos los productos del carrito?",
    "¡Todos los productos han sido eliminados!"
  );
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
  divDestinos.addEventListener("click", agregarAlCarrito);
  document.addEventListener("DOMContentLoaded", renderizarBurbuja);
  cartContainer.addEventListener("click", handleQuantity);
  btnComprar.addEventListener("click", completarCompra);
  btnVaciar.addEventListener("click", borrarProductosCarrito);
  desabilitarBtn(btnComprar);
  desabilitarBtn(btnVaciar);
};

init();
