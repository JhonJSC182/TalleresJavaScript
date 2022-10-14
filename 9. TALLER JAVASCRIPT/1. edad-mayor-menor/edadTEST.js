let contador = 0;

function table() {
    let name = document.querySelector('.input-name').value;
    let age = document.querySelector('.input-age').value;
    document.querySelector('.nameAge').innerHTML += `<tr><td class="name${contador}">${name}</td><td class="age${contador}">${age}</td></tr>`;
    contador++;
}

let mayorAge = 0;
let minorAge = 9999;
let mayorName = '';
let minorName = '';



// jhon        27

function calcular() {
    for (let i = 0; i < contador; i++) {
        let nombre = document.querySelector(`.name${i}`).innerHTML;
        let edad = document.querySelector(`.age${i}`).innerHTML;

        if(edad > mayorAge ){
            mayorAge = edad
            mayorName = nombre
        }
        if(edad < minorAge){
            minorAge = edad
            minorName = nombre
        }
    } alert (`Mayor name is ${mayorName} with age ${mayorAge} & minor name is ${minorName} with age ${minorAge}`);
}



// function ageMayor (ageL); {
//     if (age > age)
// }




// function ageMenor (ageS); {

// }

// age = '' 