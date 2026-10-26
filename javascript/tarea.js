
// =================================
// EJERCICIO 1: NUMERO PI
// =================================

function calcularPi() {

    // Leer la cantidad de terminos
    var dato = document.getElementById("terminos").value;
    var n = Number(dato);

    // Verificar que sea un entero positivo
    if (dato == "" || !isFinite(n) ||
        n < 1 || n % 1 != 0 || n > 1000000) {

        document.getElementById("resultadoPi").textContent =
            "Ingrese un entero entre 1 y 1000000.";

    } else {

        // Valor inicial de Pi
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

        // Mostrar resultado
        document.getElementById("resultadoPi").textContent =
            "Cantidad de terminos: " + n +
            "\nValor aproximado de Pi: " + pi.toFixed(10);
    }
}


// =================================
// EJERCICIO 2: ECUACION CUADRATICA
// =================================

function calcularEcuacion() {

    // Leer datos
    var datoA = document.getElementById("a").value;
    var datoB = document.getElementById("b").value;
    var datoC = document.getElementById("c").value;

    var a = Number(datoA);
    var b = Number(datoB);
    var c = Number(datoC);

    var resultado = "";

    // Validar entradas
    if (datoA == "" || datoB == "" || datoC == "" ||
        !isFinite(a) || !isFinite(b) || !isFinite(c)) {

        resultado = "Ingrese los tres coeficientes.";

    } else if (a == 0) {

        // Si a es cero, no es cuadratica
        if (b == 0) {

            if (c == 0) {
                resultado = "Infinitas soluciones.";
            } else {
                resultado = "No tiene solucion.";
            }

        } else {

            var x = -c / b;

            resultado = "Ecuacion lineal." +
                "\nx = " + x.toFixed(6);
        }

    } else {

        // Calcular discriminante
        var d = b * b - 4 * a * c;

        if (d > 0) {

            // Dos soluciones reales
            var x1 = (-b + Math.sqrt(d)) / (2 * a);
            var x2 = (-b - Math.sqrt(d)) / (2 * a);

            resultado = "Dos soluciones reales:" +
                "\nx1 = " + x1.toFixed(6) +
                "\nx2 = " + x2.toFixed(6);

        } else if (d == 0) {

            // Una solucion real doble
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

    // Mostrar resultado
    document.getElementById("resultadoEcuacion").textContent =
        resultado;
}



/* EJERCICIO 3: LOS CAMELLOS */

function repartirCamellos() {

    // Obtener el numero ingresado
    var dato = document.getElementById("camellos").value;
    var camellos = Number(dato);
    var resultado = "";

    // Verificar la entrada
    if (dato == "" || !isFinite(camellos) || camellos < 0) {

        resultado = "Ingrese una cantidad valida de camellos.";

    } else {

        // Buscar un total divisible entre 18
        var total = Math.ceil(camellos / 18) * 18;

        // Camellos necesarios para el prestamo
        var prestados = total - camellos;

        // Comprobar si el reparto entero es posible
        if (camellos % 1 == 0 &&
            prestados <= total / 18) {

            // Reparto como en el libro
            var mayor = total / 2;
            var segundo = total / 3;
            var menor = total / 9;

            var sobrantes = total - mayor - segundo - menor;
            var restantes = sobrantes - prestados;

            resultado = "Camellos iniciales: " + camellos +
                "\nCamellos prestados: " + prestados +
                "\nTotal: " + total +
                "\nHermano mayor: " + mayor +
                "\nSegundo hermano: " + segundo +
                "\nHermano menor: " + menor +
                "\nCamellos devueltos: " + prestados +
                "\nCamellos sobrantes: " + restantes;

        } else {

            // Reparto matematico general
            var mayor = camellos / 2;
            var segundo = camellos / 3;
            var menor = camellos / 9;

            var sobrantes = camellos / 18;

            resultado = "Reparto matematico:" +
                "\nTotal: " + camellos +
                "\nHermano mayor: " + mayor.toFixed(4) +
                "\nSegundo hermano: " + segundo.toFixed(4) +
                "\nHermano menor: " + menor.toFixed(4) +
                "\nCamellos sobrantes: " + sobrantes.toFixed(4) +
                "\nLas partes pueden ser fraccionarias.";
        }
    }

    // Mostrar el resultado
    document.getElementById("resultadoCamellos").textContent =
        resultado;
}


// =================================
// EJERCICIO 4: LOS 8 PANES
// CAPITULO 4
// =================================

function repartirPanes() {

    // Leer los datos de entrada
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
            "Ingrese panes no negativos, al menos un pan," +
            " y monedas no negativas.";

    } else {

        // Cada una de las tres personas come igual
        var porPersona = (a + b) / 3;

        // Calcular cuanto aporta cada viajero
        var aporteA = a - porPersona;
        var aporteB = b - porPersona;

        // Un aporte negativo se convierte en cero
        if (aporteA < 0) {
            aporteA = 0;
        }

        if (aporteB < 0) {
            aporteB = 0;
        }

        // Calcular total aportado al invitado
        var aporteTotal = aporteA + aporteB;

        // Repartir el dinero proporcionalmente
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

