//evento submit vista contacto

class Cliente {
    constructor(nombre, mail, telefono){
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
    }
}
const arrayClientes= [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    //Evito el comportamiento por default de recargar pagina al enviar formulario
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const mail = document.getElementById("mail");
    const telefono = document.getElementById("telefono")
    console.log("El nombre ingresado es: " + nombre.value);
    console.log("El mail ingresado es: " + mail.value);
    console.log("EL telefono ingresado es: " + telefono.value);
    console.log("El comentario ingresado es: " + comentarios.value)


    //Creamos un objeto Cliente:
    const cliente = new Cliente(nombre.value, mail.value, telefono.value);
    arrayClientes.push(cliente);

    console.log(arrayClientes);

    //Reseteamos el formulario una vez enviado:
    formulario.reset();
})