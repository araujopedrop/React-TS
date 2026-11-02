function greet(name: string) {
    return `Hola ${name}`;
}

// funcion flecha
// greet2 es el indentificador del espacio en memoria donde esta la funcion
// Ventaja: no cambia donde apunta el objeto this.
// greet2 no puede cambiarse a otra cosa
const greet2 = (name: string):string => {
    return `Hola ${name}`;
}

// Simplificacion de la funcion flecha. Si lo unico que hace es retornar un valor:
const greet3 = (name:string):string => `Hola ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);


interface User{
    uid: string,
    username: string,
}


function getUser():User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23',
    }
}


const getUser2 = (): User => {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23',
    }
}

// Si quiero simplificar una funcion que devuelve un objeto, tengo que usar parentesis:
const getUser3 = (): User => (
    {
        uid: 'ABC-123',
        username: 'El_Papi23',
    }
)


const user = getUser();
const user2 = getUser2();
const user3 = getUser3();

console.log(user, user2, user3);



// Funciones callback
const myNumbers: number[] = [1, 2, 3, 4, 5];

// funcion tradicional
/*
myNumbers.forEach(function (value){
    console.log({value});
})
*/

// funcion flecha
myNumbers.forEach( (value) => {
    console.log({value});
} );


// Puedo simplicar aun mas, sabiendo que solo imprimo lo que me llega por argumento
myNumbers.forEach(console.log);