// Contrato: cargar después de palabras.js y app.js, con #controles disponible.
const selectorCategoria = document.createElement("select");
selectorCategoria.setAttribute("aria-label", "Filtrar por categoría");

const opcionTodas = document.createElement("option");
opcionTodas.value = "todas";
opcionTodas.textContent = "todas";
selectorCategoria.appendChild(opcionTodas);

const categorias = [...new Set(PALABRAS.map((elemento) => elemento.categoria))];
categorias.forEach((categoria) => {
  const opcion = document.createElement("option");
  opcion.value = categoria;
  opcion.textContent = categoria;
  selectorCategoria.appendChild(opcion);
});

selectorCategoria.value = filtros.categoria;
selectorCategoria.addEventListener("change", (evento) => {
  filtros.categoria = evento.currentTarget.value;
  aplicarFiltros();
});

document.getElementById("controles").appendChild(selectorCategoria);
