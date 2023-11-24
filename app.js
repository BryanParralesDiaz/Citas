// Seleccionar los elementos HTML.
const botonElem = document.getElementById('boton-cambiar-cita');
const citaElem = document.getElementById('cita');
const autorElem = document.getElementById('autor');

// Para generar indices aleatorios.
const generarEnteroAleatorio = (minimo, maximo) => Math.floor(Math.random() * (Math.floor(maximo) - Math.ceil(minimo)) + Math.ceil(minimo));

// Seleccionar una cita aleatoria.
const cambiarCita = () => {
  const {texto, autor} = citas[generarEnteroAleatorio(0, citas.length)]
  citaElem.textContent = texto;
  autorElem.textContent = autor;
}

cambiarCita();