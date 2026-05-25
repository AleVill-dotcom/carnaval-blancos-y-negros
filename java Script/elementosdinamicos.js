const mensaje = document.getElementById("mensaje-galeria");
const hora = new Date().getHours();
if (hora < 12) {
    mensaje.textContent = "¡Buenos días! Disfruta del Carnaval de Negros y Blancos.";
} else if (hora < 18) {
    mensaje.textContent = "¡Buenas tardes! Disfruta del Carnaval de Negros y Blancos.";
} else {
    mensaje.textContent = "¡Buenas noches! Disfruta del Carnaval de Negros y Blancos.";
}
const slider = document.getElementById("slider");
const imagenes = [
    "images/imagen 3 carroza.jpg",
    "images/imagen 4 disfraz individual.jpg",
    //"images/imagen 5 comparza.jpg",
    //"images/imagen 6 murgade fuelles y cuerdas.jpg",
    "images/imagen 7 murga andina siembra del agua.jpg",
    "images/img 1 portada.jpg",
    //"images/laguna-cocha-main-image.jpg",
    "images/laguna-de-la-cocha.jpg",
    "images/img 2 carroza murga.jpg"

];
let index = 0;
setInterval(() => {
    index = (index + 1) % imagenes.length;
    slider.src = imagenes[index];
}, 3000);

const boton = document.querySelector("button");

boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "#ffcc66";
    boton.style.transform = "scale(1.1)";
});

boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = "";
    boton.style.transform = "scale(1)";
});