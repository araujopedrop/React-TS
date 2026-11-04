const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = characterNames;

console.log({p1, p2, p3});

// Si quiero algunod de los elementos:
// Aqui p4 tiene el valor 'Vegeta'
const [ , p4, ] = characterNames;
console.log({p4});



// Desestructuracion de arrays en funciones
const returnsArrayFn = () => {
    return ['ABC', 123] as const; // Con esto aseguro que el primer valor es un string y el segundo un number, y no se puede cambiar
}

const [letras, numeros] = returnsArrayFn();

console.log([letras, numeros]);



// Tarea
const useState = (name: string) => {
    return [name , (newValue: string) => {console.log(newValue)} ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"
