//Crear clases:
class Persona {
    constructor(nombre, email, telefono, comentario) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.comentario = comentario;
    }
}

//Crear un array de objetos:

const personas = [];

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener( "submit" , ()=> {
    //Evitamos que se recargue la pagina.
    e.preventDefault();
    const nombre= document.getElementById("nombre").value;
    const email= document.getElementById("email").value;
    const telefono= document.getElementById("telefono");
    const comentario= document.getElementById("comentario");

    //Creamos un objeto de tipo persona
    const persona = new Persona(nombre, email, telefono, comentario);
    //Agregamos los datos en el array personas
    personas.push(persona);


    //Guardamos los datos en el localStorage:
    localStorage.setItem("Persona", JSON.stringify(personas));

    //Limpiamos el formulario.
    idFormulario.reset();
})