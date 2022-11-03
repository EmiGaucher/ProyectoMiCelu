const contenedorProductos = document.querySelector('#contenedorProductos');
const contenedorCarrito = document.querySelector('#contenedorCarrito');
const carrito = document.querySelector('#carrito');

let carritoProducto = [];


//FUNCIONES
cargarClicks();
function cargarClicks(){

    //Agregar productos presionando "agregar al carrito"

    contenedorProductos.addEventListener("click", agregarProducto);
}

//agrega al carrito haciendo click en el boton

function agregarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains("agregarCarrito")){
        const productoSeleccion = e.target.parentElement.parentElement;
        informacionProducto(productoSeleccion);
    }
}

//Creamos funcion productoSeleccion para leer el interior del contenedor del producto

function informacionProducto(producto){

    const informacionProducto={
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector("h5").textContent,
        precio: producto.querySelector("p").textContent,
        id: producto.querySelector("button").getAttribute("data-id"),
        cantidad: 1,
    }
    console.log(informacionProducto);
}

//Mostrar Productos en HTML

function mostrarProductosHTML() {
productos.forEach((producto) => {
    const card = document.createElement('div');
    card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
    card.innerHTML = `
        <div class="contenedorHover">
            <figure>
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="capa">
            <h5 class="card-title"> ${producto.nombre} </h5>
            <p class="card-text"> ${producto.precio} </p>
            <button class="btn btn-secondary agregarCarrito" data-id="${producto.id}"> Agregar al carrito </button>
            </div>
            </figure>
        </div>
    `;
    contenedorProductos.appendChild(card);
});
};
mostrarProductosHTML();

