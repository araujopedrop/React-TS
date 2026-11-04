const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}


// Manera tradicional de desestructurar un objeto:
// const name = person.name;
// const age = person.age;
// const key = person.key;

// Desesctructuracion de objetos:
const {name: ironManName, key, age} = person;

console.log({ironManName, age, key});


interface Hero {
    name: string;         
    age: number;
    key: string;
    rank?: string;
}

// Desestructuracion en los argumentos de una funcion
// No es necesario poner el nombre de la property si su nombre es el mismo que el nombre de la variable a asignar
const useContext = ({key, name, age, rank} : Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

const {keyName,user: {name}, rank} = useContext(person);
//console.log(context);

console.log({keyName, name, rank});