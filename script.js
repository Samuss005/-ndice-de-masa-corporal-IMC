document.getElementById("formulario-imc").addEventListener("submit", function (evento) {
    evento.preventDefault()

    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)

    const imc = peso / (altura * altura)
    const imcRedondeado = imc.toFixed(2)

    let clasificacion = ""
    let claseResultado = ""

    if (imc < 18.5) {
        clasificacion = "Bajo peso"
        claseResultado = "bajo-peso"
    } else if (imc < 25) {
        clasificacion = "Normal"
        claseResultado = "normal"
    } else if (imc < 30) {
        clasificacion = "Sobrepeso"
        claseResultado = "sobrepeso"
    } else {
        clasificacion = "Obesidad"
        claseResultado = "obesidad"
    }

    const seccionResultado = document.getElementById("resultado")
    seccionResultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Tu IMC es <strong>${imcRedondeado}</strong></p>
        <p class="${claseResultado}"><strong>${clasificacion}</strong></p>
    `;
});