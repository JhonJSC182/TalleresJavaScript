

function calcular () {
    let cantidad = document.querySelector('.input-number').value;
    let current = 1;
    let before = 0;

    let result 
    
    for (let i = 0; i <= cantidad; i++) {
        result = current + before;
        before = current;
        current = result;
        document.querySelector('.dato').innerHTML += result + ','
    }
}