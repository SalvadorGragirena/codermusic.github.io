
//Variables globales
let btnRopa = document.getElementById("btn_ropa");
let btnTelevisores = document.getElementById("btn_televisores");
let btnPerfumes = document.getElementById("btn_perfumes");

let entrada1 = document.getElementsByClassName("entrada1");
let entrada2 = document.getElementsByClassName("entrada2");
let entrada3 = document.getElementsByClassName("entrada3");

let h3_ropa = document.getElementById("totalropa");
let h3_televisores = document.getElementById("totaltelevisores");
let h3_perfumes = document.getElementById("totalperfumes");

let total_R
let total_T
let total_P

class producto {
    constructor(cantidad, precio) {
        this.cantidad = cantidad
        this.precio = precio
        this.mod_cantidad = function (x) { this.cantidad = x }     
    }
    total(){
        return this.cantidad * this.precio;
     }
}

//Inicio

const ropa = [];
const televisores = [];
const perfumes = [];

for (let i = 0; i < 7; i++) {
    ropa.push(new producto(0, 10));
    televisores.push(new producto(0, 20));
    perfumes.push(new producto(0, 15));
}

/*
function suma(x,y){
    let aux = 0

    if(y==1){
        for(let i=0;i<7;i++){
            aux = aux + x[i].total();
            total_R = aux
         }
        h3_ropa.innerText = 'Total a pagar de ropa en carro es: ' + total_R;
        console.log(total_R);
    }
    else  if(y==2){
        for(let i=0;i<7;i++){
            aux = aux + x[i].total();
            total_T = aux
         }
        h3_televisores.innerText = 'Total a pagar de televisores en carro es: ' + total_T;
    }
    else if(y==3){
        for(let i=0;i<7;i++){
            aux = aux + x[i].total();
            total_P = aux
         }
        h3_perfumes.innerText = 'Total a pagar de perfumes en carro es: ' + total_P;
    }
}
*/

function suma() {
    let aux = 0

    for (let i = 0; i < 7; i++) {
        aux = aux + ropa[i].total();
    }
    total_R = aux
    h3_ropa.innerText = 'Total a pagar de ropa en carro es: ' + total_R;
    console.log(total_R);

}




function entrada_R() {
    for (let i = 0; i < 7; i++) {
        ropa[i].mod_cantidad = entrada1[i].value;
    }
}


function entrada_T() {
    for (let i = 0; i < 7; i++) {
        televisores[i].mod_cantidad = entrada2[i].value;
    }
}

function entrada_P() {
    for (let i = 0; i < 7; i++) {
        perfumes[i].mod_cantidad = entrada3[i].value;
    }
}

btnRopa.addEventListener("click", () => suma());
//btnTelevisores.addEventListener("click", () => suma(televisores,2));
//btnPerfumes.addEventListener("click", () => suma(perfumes,3));


for (let i = 0; i < entrada1.length; i++) {
    entrada1[i].addEventListener("change", () => entrada_R());
}
for (let i = 0; i < entrada2.length; i++) {
    entrada2[i].addEventListener("change", () => entrada_T());
}
for (let i = 0; i < entrada3.length; i++) {
    entrada3[i].addEventListener("change", () => entrada_P());
}
