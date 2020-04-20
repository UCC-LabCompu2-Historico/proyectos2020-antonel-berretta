
function calcularInversion(){
    var dinero = document.getElementById("inputDinero").value;
    var tiempo = document.getElementById("inputTiempo").value;
    var banco = document.getElementById("selectBanco");
    var bancoValue = banco.options[banco.selectedIndex].value;
    if (bancoValue == 1){var porcentajeBanco = 20.4;} //Mercado Pago
    if (bancoValue == 2){var porcentajeBanco = 2.4;} // Banco Galicia
    if (bancoValue == 3){var porcentajeBanco = 2.4;} // Banco Marco
    if (bancoValue == 4){var porcentajeBanco = 2.4;} // Banco Nacion
    var porcentaje = (tiempo * porcentajeBanco)/365;
    var dineroEstimado = (dinero * porcentaje)/100;
    document.getElementById("labelDineroTotal").innerHTML = dineroEstimado.toFixed(2);
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
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
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