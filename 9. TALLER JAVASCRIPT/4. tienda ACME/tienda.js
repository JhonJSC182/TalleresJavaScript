let contador = 0;

function calcular() {
    let inputNota = document.querySelector('.input-notes').value;
    let descuento = inputNota *0.93
    document.querySelector('.table-nota').innerHTML += `
    <tr>
    <td> 
        <h3 class="normal">${inputNota}</h3>
    </td>
    <td>
        <h3 class="descuento">${descuento}</h3>
    </td>
    </tr>`
    contador++;
}



function descuento() {
    document.querySelector('.table-nota')
}