let opcionseleccionada = '';

function seleccionarOpcion(opcion,valor) {
    opcionseleccionada = opcion;
    valorOpcion = valor;
    console.log("Actividad seleccionada: " + opcionseleccionada);
}

function CalcularCalorias () {
    // Obtiene el valor del peso y los minutos
    let peso = document.getElementById('peso').value;
    let minutos = document.getElementById('minutos').value;

    // Validar los minutos y el peso 
    if (minutos === "" || peso === ""){
        let error = '';
        if (peso === "") error += 'Tiene que poner el peso. ';
        if (minutos === "") error += 'Tiene que poner los minutos. ';
        let errores = document.getElementById('resulta')
        errores.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            `+ error +`
        </div>
        `;
        return
    }
    if (minutos <= 5 || minutos >=150 || peso <= 1 || peso >= 120) {
        let mensaje = '';
        if (minutos <= 5) mensaje += 'El tiempo minimo de ejercicio son 5 minutos.';
        if (minutos >= 150) mensaje += 'El tiempo maximo de ejercicio son 150 minutos.';
        if (peso <= 1) mensaje += 'El peso debe ser superior a 1 kg. ';
        if (peso >= 120) mensaje += 'El peso debe ser inferior a 120 kg. ';

        let resultado = document.getElementById('resulta')
        resultado.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            `+ mensaje +`
        </div>
        `;
        return;
    }

    // Calcula el Calorias
    const calorias = valorOpcion * 3.5 * peso * (minutos / 200);

    // Muestra el resultado
    let resultado = document.getElementById('resulta')
        resultado.innerHTML = `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            Las Calorias Quemadas son `+calorias.toFixed(1)+` kcal
        </div>
        `
    console.log("Calorias quemadas: ",calorias.toFixed(1),"kcal");
}

function Peso() {
    let peso = document.getElementById("peso")
    let mipeso = peso.value
    console.log('Peso:', mipeso,'kg')
}

function Minutos() {
    let min = document.getElementById("minutos")
    let misminutos = min.value
    console.log('Minutos:', misminutos,'min')
}

