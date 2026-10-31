// Uso interfaces para definir la forma de un objeto
// Los nombres se acostumbran a usar PascalCase, es decir, la primera letra de cada palabra en mayúscula
// Parametros con ? significa que son opcionales, es decir, no es obligatorio que el objeto tenga esa propiedad
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?:{
        postalCode: string;
        city: string;
    }
}


// Puedo definir una interfaz para usarla en otra interfaz
interface Address {
    address?:{
        postalCode: string;
        city: string;
    }
}

interface Person2 {
    firstName: string;
    lastName: string;
    age: number;
    address?:Address
}


const ironMan: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
    
} 

const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22,

}


/*
const ironMan = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
} 
*/

// Para copiar, no puedo hacer esto: const spiderman = ironMan;
// spiderman apunta al mismo espacio en memoria que ironMan 

// Puedo esparcir las propiedades usando Spread Operator. Esto rompe la referencia solo a primer nivel. Si tengo objetos anidados estos siguen referenciados
//const spiderman = {...ironMan};


console.log(ironMan, spiderman);