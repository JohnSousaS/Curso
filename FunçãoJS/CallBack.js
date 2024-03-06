function fazerAlgo(callback) {
    // Faz algo que leva tempo...
    setTimeout(function() {
       // Depois de algum tempo, chamamos o callback
       callback();
    }, 2000); // por exemplo, 2 segundos
 }
 
 // Agora vamos usar a função fazerAlgo, passando uma função de callback
 
 

 fazerAlgo(function() {
    console.log("Terminei de fazer algo!");
 });
 

 //mesma coisa, mas com arrow
let fazerAlgo2 = (callback) => setTimeout(() =>   callback(), 2000)

let TerminarDefazerAlgo = (() => console.log("Terminei de fazer algo!")) 
 
 


const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`
    )}


fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
}) 
fabricantes.forEach(fabricante => console.log(fabricante)) // o mesmo que a linha de cima, mas com arrow