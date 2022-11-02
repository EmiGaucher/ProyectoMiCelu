class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const airpods = new Producto(1, "Airpods", 149.99, "../img/airpods1.jpg");
const airpodspro = new Producto(
    2,
    "Airpods PRO",
    159.99,
    "../img/airpodspro.jpg"
);
const cableusb = new Producto(3, "Cable USB", 19.99, "../img/cable1usb.jpg");
const iphone12 = new Producto(
    4,
    "iPhone 12",
    899,
    "../img/iphone-12-128gb-original-apple.jpg"
);
const iphone11 = new Producto(5, "iPhone 11", 749, "../img/iphone12azul.jpg");
const iphone11pro = new Producto(
    6,
    "iPhone 11 PRO",
    849,
    "../img/iphone11pro.jpg"
);
const iphone12mini = new Producto(
    7,
    "iPhone 12 MINI",
    849,
    "../img/iphone-12mininegro.jpg"
);
const yerba = new Producto(8, "Yerba", 120, "img/yerba.png");

//Creamos un Array con todo nuestro catálogo de productos:

const productos = [
    airpods,
    airpodspro,
    cableusb,
    iphone12,
    iphone11,
    iphone11pro,
    iphone12mini,
    yerba,
];

//Creamos el array carrito

let carrito = [];

console.log(productos);

//Modificamos el DOM mostrando los productos:

const contenedorProductos = document.getElementById("contenedorProductos");

// Creamos una función para mostrar los productos:

const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="contenedorHover">
                <figure>
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="capa">
                <h5 class="card-title"> ${producto.nombre} </h5>
                <p class="card-text"> ${producto.precio} </p>
                <button class="btn btn-secondary" id="boton${producto.id}"> Agregar al carrito </button>
                </div>
                </figure>
            </div>
        `;
        contenedorProductos.appendChild(card);
    });
};

mostrarProductos();

const pushearProductos = (id) => {
    const entrada = Producto.find((Producto) => Producto.id === id);
    const productoEnCarrito = carrito.find((Producto) => Producto.id === id);
if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
} else {
    carrito.push(entrada);
    //Al final de la clase, guardamos en el localStorage.
    //Trabajamos con el localStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}};

pushearProductos();
