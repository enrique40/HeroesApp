import { heroes } from '../components/data/heroes';


export  const getHeroesByPlublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes( publisher ) ) {
        throw new Error( `${ publisher } is not a valid publisher`);
    }
    return heroes.filter( heroe => heroe.publisher === publisher);
}