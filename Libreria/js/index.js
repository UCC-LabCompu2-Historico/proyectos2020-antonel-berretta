
function calcularInversion(){
    var dinero = document.getElementById("inputDinero").value;
    var tiempo = document.getElementById("inputTiempo").value;
    var banco = document.getElementById("selectBanco");
    var bancoValue = banco.options[banco.selectedIndex].value;
    if (bancoValue == 1){var porcentajeBanco = 20.4;} //Mercado Pago
    if (bancoValue == 2){var porcentajeBanco = 23.5;} // Banco Galicia
    if (bancoValue == 3){var porcentajeBanco = 27.08;} // Banco Marco
    if (bancoValue == 4){var porcentajeBanco = 21;} // Banco Nacion
    var porcentaje = (tiempo * porcentajeBanco)/365;
    var dineroEstimado = (dinero * porcentaje)/100;
    console.log(dinero)
    if (dinero > 0 && dinero <= 500000 && tiempo > 0 && tiempo <= 365 ){
        document.getElementById("labelDineroTotal").innerHTML = dineroEstimado.toFixed(2);
    }
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(74,128,140)',
            borderColor: 'rgba(3,3,8,0.75)',
            data: [0, 10, 20, 2, 20, 30, 45]
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