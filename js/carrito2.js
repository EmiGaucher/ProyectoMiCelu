const contenedorProductos = document.querySelector('#contenedorProductos');
const URL = 'js/productos.json';

//CARRITO
let carritoProducto = [];

//FUNCIONES

//Mostrar Productos en HTML
async function mostrarHTML() {
  const respuesta = await fetch(URL);
  const productos = await respuesta.json();
  console.log(productos);

  productos.forEach((producto) => {
    const card = document.createElement('div');
    card.classList.add('col-xl-3', 'col-md-6', 'col-xs-12');
    card.innerHTML = `
        <div class="contenedorHover">
            <figure>
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="capa">
            <h5 class="card-title"> ${producto.nombre} </h5>
            <p class="card-text"> ${producto.precio} </p>
            <a class="btn btn-secondary agregarCarrito" id="boton${producto.id}"> Agregar al carrito </a>
            </div>
            </figure>
        </div>
    `;
    contenedorProductos.appendChild(card);

    //Agrega al carrito
    const btnAgregarProducto = document.querySelector(`#boton${producto.id}`);

    btnAgregarProducto.addEventListener('click', (e) => {
      e.preventDefault();
      agregaAlCarrito(producto.id);

      //libreria
      if (btnAgregarProducto) {
        Toastify({
          text: `Agregaste ${producto.nombre}`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: 'bottom', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      }
    });
  });
}
mostrarHTML();

//Agregar al Carrito

const contenedorCarrito = document.querySelector('#contenedorCarrito');
async function agregaAlCarrito(id) {
  const respuesta = await fetch(URL);
  const productos = await respuesta.json();

  const producto = productos.find((producto) => producto.id === id);
  const productoCarrito = carritoProducto.find(
    (producto) => producto.id === id
  );
  if (productoCarrito) {
    productoCarrito.cantidad++;
  } else {
    carritoProducto.push(producto);
  }

  carritoProductoHTML();
  console.log(carritoProducto);
}

//Mostrar Carrito en HTML

function carritoProductoHTML() {
  limpiarHTML();
  carritoProducto.forEach((producto) => {
    const cardCarrito = document.createElement('div');

    cardCarrito.classList.add('col-xl-3', 'col-md-6', 'col-xs-12');
    cardCarrito.innerHTML = `
        <div class="contenedorHover">
            <figure>
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="capa">
            <h5 class="card-title"> ${producto.nombre} </h5>
            <p class="card-text"> ${producto.precio} </p>
            <p class="cantidad>${producto.cantidad}</p>

            </div>
            </figure>
        </div>
    `;

    contenedorCarrito.appendChild(cardCarrito);
  });
  const vaciarCarrito = document.querySelector('#vaciarCarrito');
  vaciarCarrito.addEventListener('click', (e) => {
    e.preventDefault();
    carritoProducto = [];
    carritoProductoHTML();
  });
}

function limpiarHTML() {
  contenedorCarrito.innerHTML = '';
}

const pagar = document.querySelector('#pagar');
pagar.addEventListener('click', (e) => {
  e.preventDefault();
  Swal.fire('Pagaste!', 'Productos Enviados!', 'success');
  carritoProducto = [];
  carritoProductoHTML();
});
