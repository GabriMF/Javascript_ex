let first_num = 3;
let second_num = 5;
let suma;

function suma_num(){
    let suma = first_num + second_num;
    document.getElementById('text_ex_2').innerHTML = "la suma de " + first_num + " y " + second_num + " es " + suma;
}
suma_num();