// Contrato: cargar después de app.js, con #controles, filtros y aplicarFiltros() disponibles.
const campoTexto = document.createElement("input");
campoTexto.type = "text";
campoTexto.setAttribute("aria-label", "Buscar palabras");
campoTexto.addEventListener("input", (evento) => {
  filtros.texto = evento.currentTarget.value;
  aplicarFiltros();
});

document.getElementById("controles").appendChild(campoTexto);
