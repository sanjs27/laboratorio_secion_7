
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const mensajeExito = document.getElementById("mensajeExito");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const motivo = document.getElementById("motivo").value.trim();

        if (nombre === "" || correo === "" || motivo === "") {
            alert("⚠️ Por favor completa todos los campos antes de enviar.");
            return;
        }

        // Imprimir datos en consola
        console.log("Datos enviados:");
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Motivo:", motivo);
        console.log("Mensaje enviado con éxito");

        mensajeExito.style.display = "block";
        mensajeExito.textContent = "Mensaje enviado con éxito";

        form.reset();

        setTimeout(() => {
            mensajeExito.style.display = "none";
        }, 4000);
    });
});
