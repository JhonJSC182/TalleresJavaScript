contador1 = 1
contador2 = 1
contador3 = 1
contador4 = 1
contador5 = 1
contador6 = 1
contador7 = 1
contador8 = 1
contador9 = 1
contador10 = 1

function entrar () {
    let  vagon = document.querySelector('.input-vagon').value;
    let  nombre = document.querySelector('.input-documento').value;
    let  documento = document.querySelector('.input-nombre').value;
    if (vagon == 1 && contador1 <= 10) {
         document.querySelector('.input-info').innerHTML += `<tr> <td> ${contador1++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 2 && contador2 <=10){
        document.querySelector('.input-info2').innerHTML +=  `<tr> <td> ${contador2++} </td> <td>${documento} </td> <td> ${nombre}</td> <td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td></tr>   `;
    } else if (vagon == 3 && contador3 <=10){
        document.querySelector('.input-info3').innerHTML +=  `<tr> <td> ${contador3++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 4 && contador4 <=10){
        document.querySelector('.input-info4').innerHTML +=  `<tr> <td> ${contador4++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 5 && contador5 <=10){
        document.querySelector('.input-info5').innerHTML +=  `<tr> <td> ${contador5++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 6 && contador6 <=10){
        document.querySelector('.input-info6').innerHTML +=  `<tr> <td> ${contador6++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 7 && contador7 <=10){
        document.querySelector('.input-info7').innerHTML +=  `<tr> <td> ${contador7++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 8 && contador8 <=10){
        document.querySelector('.input-info8').innerHTML +=  `<tr> <td> ${contador8++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 9 && contador9 <=10){
        document.querySelector('.input-info9').innerHTML +=  `<tr> <td> ${contador9++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    } else if (vagon == 10 && contador10 <=10){
        document.querySelector('.input-info10').innerHTML += `<tr> <td> ${contador10++} </td> <td>${documento} </td> <td> ${nombre}</td><td><button type="button" class="btn btn-success onclick="removeItem()">Remove</button> </td> </tr>   `;
    }
}


// function removeItem(id){
//    document.querySelector(`.${id}`).remove();
//    contador1--
// }

