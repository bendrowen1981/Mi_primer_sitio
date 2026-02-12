// Me canse de ver tanto script, pero finalmente se pudo
//Cumpli con todas las sugerencias dadas en clases por mis compañeros y profesora, mejoras y funciones de agregar
//sugerencias que anote en un archivo word y estoy feliz por haberlo completado

const preguntas = [
  {
    texto: "1.¿Para que se utiliza JavaScript en una pagina web?  (Diseño web)",
    area: "diseno",
    opciones: {
      A: "Dar estilo a la página",
      B: "Crear interactividad",
      C: "Estructurar contenido",
      D: "Bases de datos"
    },
    correcta: "B"
  },
  {
    texto: "2.¿Con que extension se guarda un archivo script en html?",
    area: "diseno",
    opciones: {
      A: ".css",
      B: ".js",
      C: ".html",
      D: ".txt"
    },
    correcta: "B"
  },
  {
    texto: "3.¿En donde se enlaza el script?",
    area: "diseno",
    opciones: {
      A: "Al comienzo de todo el archivo",
      B: "Al comienzo del <body>",
      C: "Al final del <body>",
      D: "En cualquier lado"
    },
    correcta: "C"
  },
  {
    texto: "4.¿Cuál es la funcion principal del HTML?",
    area: "diseno",
    opciones: {
      A: "Ejecutar funciones",
      B: "Aplicar estilos",
      C: "Estructurar la página",
      D: "Validar datos"
    },
    correcta: "C"
  },
  {
    texto: "5.¿Cuál es una forma correcta de definir un color en CSS?",
    area: "diseno",
    opciones: {
      A: "color = red;",
      B: "color: #ff0000;",
      C: "color: red()",
      D: "setColor(red);"
    },
    correcta: "B"
  },
  {
    texto: "6.¿Cual es la forma correcta de enlazar un archivo Script externo?",
    area: "diseno",
    opciones: {
      A: "<js src='script.js'></js>",
      B: "<script href='script.js'></script>",
      C: "<link src='script.js'>",
      D: "<script src='Script.js'></script>"
    },
    correcta: "D"
  },
  {
    texto: "7.¿Como se utiliza correctamente la etiqueta <link>?",
    area: "diseno",
    opciones: {
      A: "<link src='style.css'>",
      B: "<link rel='stylesheet' href='Styles.css'>",
      C: "<style link='style.css'>",
      D: "<link css src='style.css'>"
    },
    correcta: "B"
  },

  {
    texto: "8.¿Cuál es la función principal de un sistema operativo?  (Sistemas Operativos)",
    area: "sistemas",
    opciones: {
      A: "Crear documentos",
      B: "Programar aplicaciones",
      C: "Controlar el hardware y software",
      D: "Navegar por internet"
    },
    correcta: "C"
  },
  {
    texto: "9.¿Qué recurso administra el sistema operativo?",
    area: "sistemas",
    opciones: {
      A: "Solo el teclado",
      B: "Memoria, procesador y dispositivos",
      C: "Solo la pantalla",
      D: "Únicamente los programas"
    },
    correcta: "B"
  },
  {
    texto: "10.¿Cuál de los siguientes es un sistema operativo?",
    area: "sistemas",
    opciones: {
      A: "Windows",
      B: "Google",
      C: "Excel",
      D: "Word"
    },
    correcta: "A"
  },

  {
    texto: "11.¿Cuál de los siguientes es un dispositivo de almacenamiento? (Soporte Tecnico)",
    area: "soporte",
    opciones: {
      A: "Disco duro",
      B: "Monitor",
      C: "Teclado",
      D: "Unidad CD"
    },
    correcta: "A"
  },
  {
    texto: "12.¿Cual es considerado el cerebro de un PC?",
    area: "soporte",
    opciones: {
      A: "Fuente de poder",
      B: "Disco Duro",
      C: "Procesador",
      D: "Cooler"
    },
    correcta: "C"
  },
  {
    texto: "13.¿Que tipos de perifericos existen?",
    area: "soporte",
    opciones: {
      A: "Solo Salida",
      B: "Almacenamiento,Entrada,salida",
      C: "Solo Entrada",
      D: "Entrada, salida, mixta"
    },
    correcta: "D"
  },

  {
    texto: "14.¿Qué estructura permite tomar decisiones en un programa?  (Programación)",
    area: "programacion",
    opciones: {
      A: "Secuencia",
      B: "Variable",
      C: "CondicionalPulsera anti estatica",
      D: "Comentario"
    },
    correcta: "C"
  },
  {
    texto: "15.¿Para qué se utilizan las variables en un programa?",
    area: "programacion",
    opciones: {
      A: "Para ejecutar errores",
      B: "Para apagar el sistema",
      C: "Para diseñar interfaces",
      D: "Para almacenar datos"
    },
    correcta: "D"
  },
  {
    texto: "16.¿Qué ocurre cuando un programa tiene errores de lógica?",
    area: "programacion",
    opciones: {
      A: "No se ejecuta",
      B: "Funciona pero da resultados incorrectos",
      C: "Se borra automáticamente",
      D: "Se ejecuta correctamente"
    },
    correcta: "B"
  }
];

let indice = 0;
let puntaje = 0;

const encuestaHTML = document.getElementById("encuesta").innerHTML;

let tiempoTotal = 5 * 60;
let tiempoRestante = tiempoTotal;
let intervaloTiempo = null;

let tiempoInicio = 0;
let tiempoFin = 0;

function formatearTiempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;
  return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

function actualizarTemporizador() {
  const timer = document.getElementById("temporizador");
  if (!timer) return;

  timer.textContent = "Tiempo: " + formatearTiempo(tiempoRestante);

  if (tiempoRestante <= 30) timer.classList.add("alerta");
  else timer.classList.remove("alerta");
}

function finalizarEncuesta(motivo) {
  clearInterval(intervaloTiempo);
  intervaloTiempo = null;

  tiempoFin = Date.now();
  const tiempoUsado = Math.floor((tiempoFin - tiempoInicio) / 1000);

  const total = preguntas.length;
  const nota = (puntaje / total) * 16;

  document.body.classList.remove("diseno", "programacion", "sistemas", "soporte");

  let titulo = "Encuesta finalizada";
  let msg = "Gracias por participar";

  if (motivo === "tiempo") {
    titulo = "Tiempo finalizado ⏰";
    msg = "Se terminó el tiempo de la prueba.";
  }

  document.getElementById("encuesta").innerHTML =
    "<h3>" + titulo + "</h3>" +
    "<p>" + msg + "</p>" +
    "<p><b>Tiempo utilizado:</b> " + formatearTiempo(tiempoUsado) + "</p>" +
    "<p><b>Calificación final:</b> " + nota.toFixed(2) + " / 16</p>" +
    "<button onclick='resetEncuesta()'>¿Quieres intentarlo de nuevo?</button>";
}

function iniciarEncuesta() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("zonaEncuesta").style.display = "block";

  tiempoRestante = tiempoTotal;
  actualizarTemporizador();

  tiempoInicio = Date.now();

  clearInterval(intervaloTiempo);
  intervaloTiempo = setInterval(() => {
    tiempoRestante--;
    actualizarTemporizador();

    if (tiempoRestante <= 0) {
      finalizarEncuesta("tiempo");
    }
  }, 1000);

  mostrarPregunta();
}

function mostrarPregunta() {
	
  if (tiempoRestante <= 0) {
    finalizarEncuesta("tiempo");
    return;
  }

  if (indice >= preguntas.length) {
    finalizarEncuesta("normal");
    return;
  }

  ["A", "B", "C", "D"].forEach(letra => {
    const btn = document.getElementById("op" + letra);
    if (btn) btn.classList.remove("correcta", "incorrecta");
  });

  const p = preguntas[indice];

  document.body.classList.remove("diseno", "programacion", "sistemas", "soporte");
  document.body.classList.add(p.area);

  document.getElementById("pregunta").textContent = p.texto;
  document.getElementById("opA").textContent = "A) " + p.opciones.A;
  document.getElementById("opB").textContent = "B) " + p.opciones.B;
  document.getElementById("opC").textContent = "C) " + p.opciones.C;
  document.getElementById("opD").textContent = "D) " + p.opciones.D;

  document.getElementById("resultado").textContent = "";
}

function responder(opcion) {
  // evita responder si ya terminó
  if (tiempoRestante <= 0) return;

  const resultado = document.getElementById("resultado");

  const botonSeleccionado = document.getElementById("op" + opcion);
  const botonCorrecto = document.getElementById("op" + preguntas[indice].correcta);

  if (opcion === preguntas[indice].correcta) {
    resultado.textContent = ":) Correcto +1";
    puntaje++;
    botonSeleccionado.classList.add("correcta");
  } else {
    resultado.textContent = ";( Incorrecto +0";
    botonSeleccionado.classList.add("incorrecta");
    botonCorrecto.classList.add("correcta");
  }

  setTimeout(() => {
    indice++;
    mostrarPregunta();
  }, 1000);
}

function resetEncuesta() {
  clearInterval(intervaloTiempo);
  intervaloTiempo = null;

  indice = 0;
  puntaje = 0;

  tiempoRestante = tiempoTotal;
  tiempoInicio = 0;
  tiempoFin = 0;

  
  document.body.classList.remove("diseno", "programacion", "sistemas", "soporte");

  document.getElementById("encuesta").innerHTML = encuestaHTML;

  document.getElementById("zonaEncuesta").style.display = "none";
  document.getElementById("portada").style.display = "flex";

  actualizarTemporizador();
}