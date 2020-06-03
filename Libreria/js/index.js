function calcularInversion(){
    var dinero = document.getElementById("inputDinero").value;
    var tiempo = document.getElementById("inputTiempo").value;
    var banco = document.getElementById("selectBanco");
    var bancoValue = banco.options[banco.selectedIndex].value;
    if (bancoValue == 1){var porcentajeBanco = 20.4;} //Mercado Pago
    if (bancoValue == 2){var porcentajeBanco = 23.5;} // Banco Galicia
    if (bancoValue == 3){var porcentajeBanco = 27.08;} // Banco Marco
    if (bancoValue == 4){var porcentajeBanco = 21;} // Banco Nacion
    var porcentajeMensual = (tiempo * porcentajeBanco)/12;
    var dineroEstimado = (dinero * porcentajeMensual)/100;
    var a = Number(dinero);
    var b = Number(dineroEstimado);
    var dineroFinal = a + b;
    var dineroPorMes = dineroFinal/tiempo;

    if (dinero > 0 && dinero <= 500000 && tiempo > 0 && tiempo <= 12 ){
        document.getElementById("labelDineroTotal").innerHTML = dineroFinal.toFixed(2);
    }
    var a = Number(dinero);
    var b = Number(dineroEstimado);
    var dineroFinal = a + b;
    var dineroPorMes = dineroEstimado/tiempo;
    var d = Number(dineroPorMes);

    var currentdate = new Date();
    var arrDate = [];
    var init = currentdate.getMonth()+1;
    arrDate.push(init);
    for (var i= 1; i<=tiempo; i++){
        if (init < 12){
            arrDate[i] = init + 1;
            init ++;
        }else{
            init = 0;
            arrDate[i] = init + 1;
            init ++;
        }
    };
    var mlist = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
    var arrMonth = [];
    for (var i = 0; i<tiempo; i++){
        arrMonth.push(mlist[arrDate[i]-1]);
    };

    var arrDinero = [];
    arrDinero.push(dinero);

    for(var x = 1; x<=tiempo; x++){
        var dd = Number(arrDinero[x-1])
        arrDinero[x] = dd + d;
    };

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: arrMonth,
            datasets: [{
                label: 'GRAFICO DE INVERSION',
                backgroundColor: 'rgb(74,128,140)',
                borderColor: 'rgba(3,3,8,0.75)',
                data: arrDinero
            }]
        },

        // Configuration options go here
        options: {}
    });
}
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'GRAFICO DE INVERSION',
            backgroundColor: 'rgb(74,128,140)',
            borderColor: 'rgba(3,3,8,0.75)',
            data: []
        }]
    },

    // Configuration options go here
    options: {}
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();