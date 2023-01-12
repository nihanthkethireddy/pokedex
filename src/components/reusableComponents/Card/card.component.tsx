import { Link } from 'react-router-dom';
import { IPokemonData } from '../../pages/Home/home.types';
import { cardStyles } from './card.styles';
import { ICardProps } from './card.types';

function Card (props: ICardProps) {
    const pokemon: Partial<IPokemonData> = props.pokemon
    return <Link to={`/pokemon/${pokemon.id}`}>
        <div {...cardStyles}>
            <div><img src={pokemon.img}></img></div>
            <p>Name: {pokemon.name}</p>
            <p>Exp: {pokemon.exp}</p>
            <p>Abilities: {pokemon.abilities && pokemon.abilities.toString().replace(',',' ')}</p>
        </div>
    </Link>
}

export { Card }