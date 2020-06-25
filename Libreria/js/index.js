/**
 * Calcula la inversion segun los datos ingresados
 * @method calcularInversion
 */
function calcularInversion() {
    // Trae los valores ingresados en el HTML

    var tiempo = document.getElementById("inputTiempo").value;
    var dinero = document.getElementById("inputDinero").value;
    var banco = document.getElementById("selectBanco");
    var bancoValue = banco.options[banco.selectedIndex].value;
    if (bancoValue == 1) {
        var porcentajeBanco = 20.4;
    } //Mercado Pago
    if (bancoValue == 2) {
        var porcentajeBanco = 23.5;
    } // Banco Galicia
    if (bancoValue == 3) {
        var porcentajeBanco = 27.08;
    } // Banco Marco
    if (bancoValue == 4) {
        var porcentajeBanco = 21;
    } // Banco Nacion
    var porcentajeMensual = (tiempo * porcentajeBanco) / 12;
    var dineroEstimado = (dinero * porcentajeMensual) / 100;
    var a = Number(dinero);
    var b = Number(dineroEstimado);
    var dineroFinal = a + b;
    var dineroPorMes = dineroFinal / tiempo;

    // Corrobora que el dinero y el tiempo sean validos, procede a graficar
    if (dinero > 0 && dinero <= 500000 && tiempo > 0 && tiempo <= 36) {
        document.getElementById("labelDineroTotal").innerHTML = `$ ${dineroFinal.toFixed(2)}`;
        var a = Number(dinero);
        var b = Number(dineroEstimado);
        var dineroFinal = a + b;
        var dineroPorMes = dineroEstimado / tiempo;
        var d = Number(dineroPorMes);

        //  Crea un array segun el tiempo de inversion
        var currentdate = new Date();
        var arrDate = [];
        var init = currentdate.getMonth() + 1;
        arrDate.push(init);
        for (var i = 1; i <= tiempo; i++) {
            if (init < 12) {
                arrDate[i] = init + 1;
                init++;
            } else {
                init = 0;
                arrDate[i] = init + 1;
                init++;
            }
        }
        ;
        // Crea un array con los nombres de los meses para el grafico
        var mlist = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var arrMonth = [];
        for (var i = 0; i <= tiempo; i++) {
            arrMonth.push(mlist[arrDate[i] - 1]);
        }
        ;

        // Crea un array para la data del grafico con la ganancia mensual
        var arrDinero = [];
        arrDinero.push(dinero);

        for (var x = 1; x <= tiempo; x++) {
            var dd = Number(arrDinero[x - 1])
            arrDinero[x] = dd + d;
        }
        ;

        // Crea el grafico con los datos correspondientes
        crearGrafico(arrMonth, arrDinero);
    }
}


/**
 *  Crea el grafico vacio que se ve al iniciar la pagina
 * @method crearGrafico
 * @param Param1
 * @param Param2
 */
function crearGrafico(param1, param2) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: param1,
            datasets: [{
                label: 'GRAFICO DE INVERSION',
                backgroundColor: 'rgb(74,128,140)',
                borderColor: 'rgba(3,3,8,0.75)',
                data: param2
            }]
        },
    });
};


/**
 * Valida que los datos del form sean correctos
 * @method validarForm
 */
(function validarForm() {
    var bt = document.getElementById("btSubmit");
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    // En caso de datos invalidos crea un grafico vacio
                    crearGrafico([], []);
                    document.getElementById("labelDineroTotal").innerHTML = " ";
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


