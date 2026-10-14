const ironMan = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
} 

// Para copiar, no puedo hacer esto: const spiderman = ironMan;
// spiderman apunta al mismo espacio en memoria que ironMan 

// Puedo esparcir las propiedades usando Spread Operator. Esto rompe la referencia solo a primer nivel. Si tengo objetos anidados estos siguen referenciados
//const spiderman = {...ironMan};

const spiderman = structuredClone(ironMan); // Esto rompe la referencia a todos los niveles, pero no es soportado en todos los navegadores

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'Campana';

console.log(ironMan, spiderman);