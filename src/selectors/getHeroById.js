import { heroes } from "../components/data/heroes";


export const getHeroById= ( id = '') => {
     console.log('getHeroById call');
     return heroes.find( hero => hero.id === id);
}