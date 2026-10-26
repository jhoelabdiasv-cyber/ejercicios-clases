
// =================================
// EJERCICIO 1: NUMERO PI
// =================================

function calcularPi() {

    // Leer los terminos
    var dato = document.getElementById("terminos").value;
    var n = Number(dato);

    if (dato == "" || !isFinite(n) ||
        n < 1 || n % 1 != 0 || n > 1000000) {

        document.getElementById("resultadoPi").textContent =
            "Ingrese un entero entre 1 y 1000000.";

    } else {

        // Valor inicial
        var pi = 3;

        // Serie de Nilakantha
        for (var i = 1; i <= n; i++) {

            var x = 2 * i;
            var termino = 4 / (x * (x + 1) * (x + 2));

            if (i % 2 == 1) {
                pi = pi + termino;
            } else {
                pi = pi - termino;
            }
        }

        // Mostrar el resultado
        document.getElementById("resultadoPi").textContent =
            "Cantidad de terminos: " + n +
            "\nValor aproximado de Pi: " + pi.toFixed(10);
    }
}


// =================================
// EJERCICIO 2: ECUACION CUADRATICA
// =================================

function calcularEcuacion() {

    // Leer los coeficientes
    var datoA = document.getElementById("a").value;
    var datoB = document.getElementById("b").value;
    var datoC = document.getElementById("c").value;

    var a = Number(datoA);
    var b = Number(datoB);
    var c = Number(datoC);

    var resultado = "";

    // Comprobar datos
    if (datoA == "" || datoB == "" || datoC == "" ||
        !isFinite(a) || !isFinite(b) || !isFinite(c)) {

        resultado = "Ingrese los tres coeficientes.";

    } else if (a == 0) {

        // Ecuacion lineal
        if (b == 0) {

            if (c == 0) {
                resultado = "Infinitas soluciones.";
            } else {
                resultado = "No tiene solucion.";
            }

        } else {

            var x = -c / b;

            resultado = "Ecuacion lineal:" +
                "\nx = " + x.toFixed(6);
        }

    } else {

        // Discriminante
        var d = b * b - 4 * a * c;

        if (d > 0) {

            // Dos soluciones reales
            var x1 = (-b + Math.sqrt(d)) / (2 * a);
            var x2 = (-b - Math.sqrt(d)) / (2 * a);

            resultado = "Dos soluciones reales:" +
                "\nx1 = " + x1.toFixed(6) +
                "\nx2 = " + x2.toFixed(6);

        } else if (d == 0) {

            // Una solucion doble
            var x = -b / (2 * a);

            resultado = "Una solucion real doble:" +
                "\nx = " + x.toFixed(6);

        } else {

            // Dos soluciones complejas
            var real = -b / (2 * a);
            var imaginaria = Math.sqrt(-d) / (2 * Math.abs(a));

            resultado = "Dos soluciones complejas:" +
                "\nx1 = " + real.toFixed(6) +
                " + " + imaginaria.toFixed(6) + "i" +
                "\nx2 = " + real.toFixed(6) +
                " - " + imaginaria.toFixed(6) + "i";
        }
    }

    // Mostrar el resultado
    document.getElementById("resultadoEcuacion").textContent =
        resultado;
}


// =================================
// EJERCICIO 3: LOS CAMELLOS
// CAPITULO 3
// =================================

function repartirCamellos() {

    // Obtener el numero ingresado
    var dato = document.getElementById("camellos").value;
    var camellos = Number(dato);

    // Comprobar que sea un numero finito
    if (dato == "" || !isFinite(camellos)) {

        document.getElementById("resultadoCamellos").textContent =
            "Ingrese una cantidad numerica.";

        return;
    }

    // Convertir a entero no negativo
    camellos = Math.floor(Math.abs(camellos));

    // Variables para el reparto
    var mayor = 0;
    var segundo = 0;
    var menor = 0;
    var prestados = 0;
    var sobrantes = 0;

    // Caso original del libro
    if (camellos == 35) {

        prestados = 1;
        mayor = 18;
        segundo = 12;
        menor = 4;
        sobrantes = 1;

    } else {

        // Reparto general con numeros enteros
        mayor = Math.floor(camellos / 2);
        segundo = Math.floor(camellos / 3);
        menor = Math.floor(camellos / 9);

        // Calcular los camellos restantes
        sobrantes = camellos - mayor - segundo - menor;
    }

    // Mostrar los resultados sin decimales
    document.getElementById("resultadoCamellos").textContent =
        "Camellos iniciales: " + camellos +
        "\nCamellos prestados: " + prestados +
        "\nHermano mayor: " + mayor +
        "\nSegundo hermano: " + segundo +
        "\nHermano menor: " + menor +
        "\nCamellos sobrantes: " + sobrantes;
}


// =================================
// EJERCICIO 4: LOS PANES
// CAPITULO 4
// =================================

function repartirPanes() {

    // Leer los datos
    var datoA = document.getElementById("panesA").value;
    var datoB = document.getElementById("panesB").value;
    var datoM = document.getElementById("monedas").value;

    var a = Number(datoA);
    var b = Number(datoB);
    var monedas = Number(datoM);

    if (datoA == "" || datoB == "" || datoM == "" ||
        !isFinite(a) || !isFinite(b) || !isFinite(monedas) ||
        a < 0 || b < 0 || a + b == 0 || monedas < 0) {

        document.getElementById("resultadoPanes").textContent =
            "Ingrese cantidades validas y no negativas.";

    } else {

        // Calcular el pan para cada persona
        var porPersona = (a + b) / 3;

        // Calcular el aporte de cada viajero
        var aporteA = a - porPersona;
        var aporteB = b - porPersona;

        // No permitir aportes negativos
        if (aporteA < 0) {
            aporteA = 0;
        }

        if (aporteB < 0) {
            aporteB = 0;
        }

        // Total de aporte al invitado
        var aporteTotal = aporteA + aporteB;

        // Calcular las monedas
        var pagoA = monedas * aporteA / aporteTotal;
        var pagoB = monedas * aporteB / aporteTotal;

        // Mostrar resultados
        document.getElementById("resultadoPanes").textContent =
            "Total de panes: " + (a + b) +
            "\nPan por persona: " + porPersona.toFixed(2) +
            "\nAporte del primero: " + aporteA.toFixed(2) +
            "\nAporte del segundo: " + aporteB.toFixed(2) +
            "\nMonedas para el primero: " + pagoA.toFixed(2) +
            "\nMonedas para el segundo: " + pagoB.toFixed(2);
    }
}
