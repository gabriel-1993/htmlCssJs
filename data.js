// A continuación les dejamos las indicaciones que deberán tener en cuenta para realizar el proyecto del módulo de Js.

// 🔗 Se puede elegir entre un Ecommerce o Un sitio de Noticias.

// 🔗 Tendrán hasta el 28/2 a las 23:59 para la realización del mismo. Fuera de este plazo no se aceptará su entrega.

// 🔗 Recuerden que no pueden usar el Logo institucional de Nucba. Desarrollen su propia idea, su propio modelo de negocio.

// 🔗 En caso de ser necesario, habrá una segunda instancia de entrega para realizar las correcciones que el profesor les haga (En caso de que el profesor crea necesaria esta segunda instancia). La idea de esto es que puedan terminar de pulir los detalles que hayan quedado por pulir o mejorar en el trabajo y puedan, al finalizar este plazo, tener un proyecto bien pulido y completo para su portfolio. La misma tendrá un plazo de 15 días desde su habilitación.

// 🔗 Si no tienen que pasar a una segunda instancia, sigan iterando el proyecto de todas formas, ya que es importante seguir mejorando lo ya realizado

// 🔗 No se aceptarán copias del Nucba Nft. Esto quiere decir que no pueden cambiar fotos, colores y textos y entregar su integrador siendo prácticamente un calco de dicho proyecto. Usenlo como guía, pero hagan algo propio de lo que puedan sentirse orgullosos

// 🔗 Los Requisitos de aprobación son los siguientes:

// 👉 Que se rendericen ciertas partes de la página (carrito, productos, etc.) desde Js.

// 👉 Que se utilicen buenas prácticas a la hora de estructurar y organizar el código (buena organización del código en general, por ejemplo, buenos nombres de variables, funciones y parámetros).

// 👉 Deberá tener al menos una funcionalidad en la que capture datos de una parte de la página y cree un componente HTML en base a eso (Por ejemplo, una funcionalidad de agregar un producto al carrito, que tome los datos de dicho producto para renderizarlo en el mismo).

// 👉 Deberá utilizar localStorage, para persistir datos en el sitio.

// 👉 En caso de que lo deseen, podrán usar algún framework de CSS para el estilado de la página.

// 👉 El Sitio deberá ser una landing page totalmente responsive, en la que deberá haber una sección de productos y una página  de login ( como referencia para organizarse, pueden tomar la estructura del Nucba NFT y agregar la página de login y registro).

// 👉 El sitio debe ser responsivo y tener menú hamburguesa (funcional, realizado con js) en las resoluciones (mobile, tablet, etc.) que corresponda.

// 👉 Deberá tener la funcionalidad de filtrar por categorías. (productos o noticias).

// 👉 Deberán entregar el repositorio de Github, con el Vercel de la página vinculado.

const destinosList = [
  {
    id: 1,
    nombre: "Peru",
    imagen: "./assets/img/peru.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "America",
  },
  {
    id: 2,
    nombre: "Italia",
    imagen: "./assets/img/italia.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "Europa",
  },
  {
    id: 3,
    nombre: "Brasil",
    imagen: "./assets/img/brasil.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "America",
  },
  {
    id: 4,
    nombre: "Venecia",
    imagen: "./assets/img/venecia.avif",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "Europa",
  },
  {
    id: 5,
    nombre: "Venezuela",
    imagen: "./assets/img/venezuela.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "America",
  },
  {
    id: 6,
    nombre: "Perito Moreno",
    imagen: "./assets/img/patagonia.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "America",
  },
  {
    id: 7,
    nombre: "Misiones",
    imagen: "./assets/img/cataratas.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "America",
  },
  {
    id: 8,
    nombre: "Bariloche",
    imagen: "./assets/img/bariloche.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "America",
  },
  {
    id: 9,
    nombre: "Egipto",
    imagen: "./assets/img/egipto.jpg",
    precio: 845,
    descripcion: "7 Dias, hospedaje y viaje ",
    categoria: "Africa",
  },
];
// RENDERIZAR DESTINOS
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

const destinos = destinosList.map((destino) => {
  return `
  <div class="card-destino">
    <img src="${destino.imagen}" class="dimg"/>
      <div class="card-destino-down">
          <h3>${destino.nombre}</h3>
          <div class="down-items">
          <div class="down-items-1">
          <p>${destino.descripcion}</p>
          <span> $${destino.precio}</span>
          </div>
          <button class="btn">Comprar</button>
      </div>
    </div>
  </div>
  `;
});

divDestinos.innerHTML = destinos.join("");

// BUSCAR Y GUARDAR EN localStorage(carrito)
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// const saveLocalStorage = (cartList) => {
//   localStorage.setItem("cart", JSON.stringify(cartList));
// };
