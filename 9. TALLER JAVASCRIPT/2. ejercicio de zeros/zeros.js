let contador = 0;

function table() {
    let inputNota = document.querySelector('.input-notes').value;
    document.querySelector('.table-nota').innerHTML += `<tr><td  class="nota${contador}">${inputNota}</td></tr>`
    contador++;
}

let contadorPositivo = 0;
let contadorNegativo = 0;
let contadorZero = 0;

function calcular() {
    for (let i = 0; i < contador; i++) {
        let notes = document.querySelector(`.nota${i}`).innerHTML;
        if (notes > 0) {
            contadorPositivo++
        } else if (notes < 0) {
            contadorNegativo++
        } else {
            contadorZero++
        }
    } alert (`The total number of positive numbers is ${contadorPositivo}, negative ${contadorNegativo} and zero's ${contadorZero}`)

}
