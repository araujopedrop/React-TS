// Aclarando el tipado del array no me dejaria poner otros elementos que no sean de ese tipoo
const myArray:number[] = [1,2,3,4,5,6];
const myArray2 = structuredClone(myArray);
const myArray3: (number | string)[] = [1,2,3,4,5,6,'hola']; //aqui declaro que el array va a tener 2 tipos de datos

for (const myNumber of myArray){
    console.log(myNumber + 10);
}

for (const myNumber of myArray2){
    console.log(myNumber + 10);
}
