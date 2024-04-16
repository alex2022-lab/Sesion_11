document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("form");

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const nombre = form.elements['name'];
        const email = form.elements['email'];
        const telefono = form.elements['tel'];

        alert(`El usuario fue registrado correctamente`)
    })
})






document.addEventListener('DOMContentLoaded', (event) =>{

    const boton = document.getElementById("boton-registro");
    const contenedor = document.getElementById("container");

    boton.addEventListener("click", function () {

        const nombre = form.elements['name'];
        const email = form.elements['email'];
        const telefono = form.elements['tel'];

      const elemento = document.createElement("li");

      elemento.textContent = nombre, email, telefono;
      
      contenedor.appendChild(elemento);

    });

});