//Type
//type Owner = 'DC' | 'Marvel';
// Enumeracion
/*
enum Owner {
    DC, //0
    MARVEL, // 1
}
*/
enum Owner {
    DC = 'DC', //0
    Marvel = 'Marvel', // 1
}


interface Hero{
    id:    number;
    name:  string;
    owner: Owner;
}


const heroes:Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];