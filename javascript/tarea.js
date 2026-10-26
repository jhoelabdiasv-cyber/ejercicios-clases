// EJERCICIO 1: RAIZ CUADRADA
function calcularRaiz() {
    var dato = document.getElementById("numeroRaiz").value;
    var numero = Number(dato);

    if (dato == "" || numero < 0) {
        document.getElementById("resultadoRaiz").textContent =
            "Ingrese un numero mayor o igual a cero.";
    } else {
        var raiz = Math.sqrt(numero);
        document.getElementById("resultadoRaiz").textContent =
            "La raiz cuadrada de " + numero + " es " + raiz.toFixed(2);
    }
}

// EJERCICIO 2: SUMATORIA
function calcularSuma() {
    var dato = document.getElementById("numeroSuma").value;
    var numero = Number(dato);

    if (dato == "" || numero < 1 || numero % 1 != 0 || numero > 10000) {
        document.getElementById("resultadoSuma").textContent =
            "Ingrese un numero entero entre 1 y 10000.";
    } else {
        var suma = 0;
        for (var i = 1; i <= numero; i++) {
            suma = suma + i;
        }
        document.getElementById("resultadoSuma").textContent =
            "La suma desde 1 hasta " + numero + " es " + suma;
    }
}

// EJERCICIO 3: LOS CAMELLOS
function repartirCamellos() {
    var dato = document.getElementById("numeroCamellos").value;
    var camellos = Number(dato);

    if (dato == "" || camellos < 1 || camellos % 1 != 0 || camellos > 10000) {
        document.getElementById("resultadoCamellos").textContent =
            "Ingrese un numero entero entre 1 y 10000.";
    } else {
        var total = camellos;
        while (total % 18 != 0) {
            total = total + 1;
        }

        var prestados = total - camellos;
        var mayor = total / 2;
        var segundo = total / 3;
        var menor = total / 9;
        var sobrantes = total - mayor - segundo - menor;

        if (sobrantes < prestados) {
            document.getElementById("resultadoCamellos").textContent =
                "No se puede completar el reparto y devolver los camellos prestados.";
        } else {
            document.getElementById("resultadoCamellos").textContent =
                "Se trabaja con " + total + " camellos. " +
                "Mayor: " + mayor + ". Segundo: " + segundo +
                ". Menor: " + menor + ". Prestados devueltos: " +
                prestados + ". Camellos restantes: " + (sobrantes - prestados) + ".";
        }
    }
}

// EJERCICIO 4: LOS PANES
function repartirPanes() {
    var textoA = document.getElementById("panesA").value;
    var textoB = document.getElementById("panesB").value;
    var textoM = document.getElementById("monedas").value;
    var a = Number(textoA);
    var b = Number(textoB);
    var monedas = Number(textoM);

    if (textoA == "" || textoB == "" || textoM == "" ||
        a < 1 || b < 1 || monedas < 1 ||
        a % 1 != 0 || b % 1 != 0 || monedas % 1 != 0) {
        document.getElementById("resultadoPanes").textContent =
            "Ingrese cantidades enteras positivas.";
    } else {
        var porPersona = (a + b) / 3;
        var aporteA = a - porPersona;
        var aporteB = b - porPersona;

        if (aporteA < 0 || aporteB < 0) {
            document.getElementById("resultadoPanes").textContent =
                "Los dos viajeros deben tener pan suficiente para su propia parte.";
        } else {
            var pagoA = monedas * aporteA / (aporteA + aporteB);
            var pagoB = monedas * aporteB / (aporteA + aporteB);

            document.getElementById("resultadoPanes").textContent =
                "Primer viajero: " + pagoA.toFixed(2) + " monedas. " +
                "Segundo viajero: " + pagoB.toFixed(2) + " monedas.";
        }
    }
}

