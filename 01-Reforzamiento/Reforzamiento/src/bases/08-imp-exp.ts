import { heroes, Owner, type Hero } from "../data/heroes.data"


const getHeroById = (id: number):Hero | undefined => {
    const hero = heroes.find((hero) => {return hero.id === id})
    return hero;
}

export const getHeroByOwner = (ow: Owner):Hero[] => {
    
    var myHeroes: Hero[] = heroes.filter((hero) => {return hero.owner === ow} );
    return myHeroes;
}


