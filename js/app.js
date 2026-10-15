let filtros = { texto: "", categoria: "todas" };

function aplicarFiltros() {
  const lista = document.getElementById("lista");
  const busqueda = filtros.texto.trim().toLocaleLowerCase("es");
  const palabrasFiltradas = PALABRAS.filter((elemento) => {
    const coincideCategoria = filtros.categoria === "todas" || elemento.categoria === filtros.categoria;
    const contenido = `${elemento.palabra} ${elemento.categoria} ${elemento.descripcion}`.toLocaleLowerCase("es");
    return coincideCategoria && contenido.includes(busqueda);
  });

  lista.replaceChildren();
  palabrasFiltradas.forEach((elemento) => {
    const item = document.createElement("li");
    const palabra = document.createElement("strong");
    const categoria = document.createElement("span");
    palabra.textContent = elemento.palabra;
    categoria.className = "categoria";
    categoria.textContent = elemento.categoria;
    item.append(palabra, " ", categoria, document.createElement("br"), elemento.descripcion);
    lista.appendChild(item);
  });

  document.getElementById("contador").textContent = `Mostrando ${palabrasFiltradas.length} de ${PALABRAS.length} palabras`;
}

document.getElementById("titulo").textContent = APP_TITULO;
document.getElementById("subtitulo").textContent = APP_SUBTITULO;
document.getElementById("version").textContent = APP_VERSION;
aplicarFiltros();
