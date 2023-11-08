/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo = Object.entries(objeto);
   return arreglo;


}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrIni = string.split('').sort();
   console.log(arrIni);
   
   let objeto ={};

   arrIni.forEach((elemento) => {
      objeto[elemento] = (objeto[elemento] || 0) +1;
   });
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let newStrin = string.split("");
   console.log(newStrin);
   let arrMin = [];
   let arrMay = [];

   newStrin.forEach((elemento)=>{
      if(elemento.toUpperCase() === elemento){
         arrMay.push(elemento);
      }
      else{
         arrMin.push(elemento);
      };
   });
   let orden = arrMay.concat(arrMin);
   return orden.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const nuevaFrase= frase.split("").reverse().join("");
   console.log(nuevaFrase);
   const nFrase= nuevaFrase.split(' ').reverse().join(" ");
   return nFrase;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numInv = numero.toString().split("").reverse().join("");
   let cap = parseInt(numInv);
   if(numero === cap) return "Es capicua";
   return 'No es capicua'; 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const arrayStr = string.split("");
   const arrN=[];
   arrayStr.forEach(function(elemento, indice) {
      if(elemento!=="a" && elemento!=="b" && elemento!=="c"){
         arrN.push(elemento)
      }
     // console.log("pos=", indice, "valor=", elemento);
  });
   return arrN.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   console.log(arrayOfStrings)
   const arrN= arrayOfStrings.sort(function (a, b) { 
      if(a.length > b.length){
         console.log('soy a:' + a, 'soy b:' + b)
         return 1;
      }
      else if(a.length < b.length){
         console.log('soy a:' + a, 'soy b:' + b)
         return -1;
      }
      return 0;
   })
   return arrN;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var elemtComu = array1.filter( (element) => {
    return  (array2.includes(element)) 
    });
   return elemtComu;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
