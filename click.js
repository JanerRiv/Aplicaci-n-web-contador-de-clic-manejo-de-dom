const numero = document.getElementById("numero");
const boton = document.getElementById("boton");
const filas = document.getElementById("filas");

let numeroClics = 0;

boton.addEventListener("click", function() {
    numeroClics++;

    numero.textContent = numeroClics;

    const fechaActual = new Date();
    const horaExacta = fechaActual.toLocaleTimeString("es-CO", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    const nuevaFila = document.createElement("tr");

    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    celdaNumero.textContent = numeroClics;
    celdaHora.textContent = horaExacta;

    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);

    filas.prepend(nuevaFila);
});
