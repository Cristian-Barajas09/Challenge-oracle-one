import { Desencriptador } from "./Desencriptador.js";
import { Encriptador } from "./Encriptador.js";
const input = document.getElementById("input");
const btn = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const salida = document.getElementById("salida");
const content = document.getElementById("content");
const btnCopiar = document.getElementById("copiar");
const cajaSalida = document.getElementById("caja-salida");
const alertMessage = document.getElementById('alert-message');
const closeButton = document.getElementById("close-button");
const textAlert = document.getElementById("text-alert");
const letras = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};
function desencriptarTexto() {
    if (input.value === "") {
        openAlert("Debe ingresar un texto no puede estar vacio", "error");
        return;
    }
    const desencriptar = new Desencriptador(letras);
    content.style.display = "none";
    cajaSalida.style.display = "block";
    salida.innerHTML = desencriptar.desencriptar(input.value);
}
function encriptarTexto() {
    console.log(input.value === "");
    if (input.value === "") {
        openAlert("Debe ingresar un texto no puede estar vacio", "error");
        return;
    }
    const encriptador = new Encriptador(input, letras);
    let texto = input.value.split('');
    content.style.display = "none";
    cajaSalida.style.display = "block";
    salida.innerHTML = encriptador.analizar(texto);
}
function copiar() {
    navigator.clipboard
        .writeText(salida.innerText)
        .then(() => openAlert("El Texto a sido copiado con exito", "success"));
}
function openAlert(text, status) {
    textAlert.innerHTML = text;
    alertMessage.style.display = "block";
    alertMessage.setAttribute("class", "");
    alertMessage.classList.add('alert-message');
    alertMessage.classList.remove('close');
    alertMessage.classList.add('open', status);
}
function closeAlert() {
    alertMessage.classList.remove('open');
    alertMessage.classList.add('close');
    setTimeout(() => alertMessage.style.display = "none", 2000);
}
closeButton.onclick = closeAlert;
btn.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copiar;
