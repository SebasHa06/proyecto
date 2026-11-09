/**
 * LÓGICA DE PROGRAMACIÓN CON ESTRUCTURAS ALGORÍTMICAS
 * Diseñado de forma simple y didáctica para el entorno docente.
 */

// ------------------------------------------------------------------
// 1. ESTRUCTURA SECUENCIAL
// Ejemplo: Cálculo del promedio de notas (Secuencia lineal)
// ------------------------------------------------------------------
function calcularPromedio() {
    // Paso 1: Lectura de datos de los inputs del HTML
    let input1 = document.getElementById('nota1').value;
    let input2 = document.getElementById('nota2').value;
    let input3 = document.getElementById('nota3').value;

    // Paso 2: Conversión de texto a valores numéricos
    let n1 = parseFloat(input1) || 0;
    let n2 = parseFloat(input2) || 0;
    let n3 = parseFloat(input3) || 0;

    // Paso 3: Operaciones aritméticas secuenciales
    let suma = n1 + n2 + n3;
    let promedio = suma / 3;

    // Paso 4: Salida del resultado al DOM
    let elementoResultado = document.getElementById('resSecuencial');
    elementoResultado.className = "resultado res-exito";
    elementoResultado.innerText = "Promedio Final: " + promedio.toFixed(2) + " pts";
}

// ------------------------------------------------------------------
// 2. ESTRUCTURA CONDICIONAL
// Ejemplo: Toma de decisiones según la calificación (if / else)
// ------------------------------------------------------------------
function evaluarEstudiante() {
    // Paso 1: Obtener la calificación del input
    let nota = parseFloat(document.getElementById('notaEstudiante').value) || 0;
    let elementoResultado = document.getElementById('resCondicional');

    // Paso 2: Evaluación condicional
    if (nota >= 60) {
        // Camino Verdadero (Si se cumple la condición)
        elementoResultado.className = "resultado res-exito";
        elementoResultado.innerText = "¡Aprobado! El alumno logró la competencia.";
    } else {
        // Camino Falso (Si no se cumple la condición)
        elementoResultado.className = "resultado res-alerta";
        elementoResultado.innerText = "Reprobado. Requiere plan de nivelación.";
    }
}

// ------------------------------------------------------------------
// 3. ESTRUCTURA ITERATIVA
// Ejemplo: Generación de planilla de asistencia mediante un bucle
// ------------------------------------------------------------------
function generarAsistencia() {
    // Paso 1: Obtener el número de iteraciones requeridas
    let cantidad = parseInt(document.getElementById('numEstudiantes').value) || 1;
    let contenedor = document.getElementById('resIterativa');

    // Limitar la cantidad máxima para evitar bloqueos visuales
    if (cantidad > 10) cantidad = 10;
    if (cantidad < 1) cantidad = 1;

    let listaHTML = "<ul>";

    // Paso 2: Bucle for para repetir el proceso
    for (let i = 1; i <= cantidad; i++) {
        listaHTML += "<li>";
        listaHTML += "<span>Estudiante #" + i + "</span>";
        listaHTML += "<strong style='color: #137333;'>✓ Presente</strong>";
        listaHTML += "</li>";
    }

    listaHTML += "</ul>";

    // Paso 3: Renderizado final en el HTML
    contenedor.innerHTML = listaHTML;
}