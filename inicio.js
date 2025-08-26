document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    // Reemplaza con tu número de WhatsApp (incluye el código de país, sin "+" ni espacios)
    let telefono = "525615011523";

    let texto = `Hola, soy ${nombre}.%0A📧 Mi correo es: ${correo}.%0A✍️ Mensaje: ${mensaje}`;

    let url = `https://wa.me/${telefono}?text=${texto}`;
    window.open(url, "_blank");
});