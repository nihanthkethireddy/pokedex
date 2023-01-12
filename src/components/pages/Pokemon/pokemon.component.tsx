import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_POKEMON_BY_ID } from '../../../apollo/queries';
import { formatPokemonData } from '../../../utils/formatPokemonData';
import Footer from '../../reusableComponents/Footer';
import { cardStyles, evolutionStyles, imgStyles, pokemonStyles, spritesStyles, statStyles } from './pokemon.styles';

const renderSprites = (sprites: any) => {
    const versions = sprites.versions
    const renderImgs = (key: any) => Object.keys(versions[key]).map((imgKey) => {
        if (imgKey !== 'icons') {
        return <div>
            <img src={versions[key][imgKey].front_default}></img>
            <p>{imgKey}</p>
        </div>
        }
    })
    const spriteEle = Object.keys(versions).map(key => {
        if (Object.keys(versions[key]).length === 1 && Object.keys(versions[key])[0] === 'icons') {
            return null
        }
        return <div {...cardStyles}>
            <div {...imgStyles}>
                {renderImgs(key)}
            </div>
            <p>{key}</p>
        </div>
    })
    return spriteEle
}

const renderEvolution = (ev: any) => {
    const evEle = ev.map((evObj: any) => {
        return <Link to={`/pokemon/${evObj.id}`}>
        <div {...cardStyles}>
            <p>Name: {evObj.name}</p>
            <p>Happiness: {evObj.base_happiness}</p>
            <p>Capture Rate: {evObj.capture_rate}</p>
        </div>
        </Link>
    }) 
    return evEle
}

function Pokemon() {
    const params: any = useParams();
    const { loading, data } = useQuery(GET_POKEMON_BY_ID(parseInt(params.id)));
    const renderPokemonData = () => {
        if (!loading && data) {
            const formattedData = formatPokemonData(data)
            return <div {...pokemonStyles}>
                <Link to={'/'}>Home</Link>
                <h1>{formattedData.name.toUpperCase()}</h1>
                <img src={formattedData.sprites.front_default}></img>
                <div {...statStyles}>
                    <p>Exp: {formattedData.exp}</p>
                    <p>Height: {formattedData.height}</p>
                    <p>Abilites : {formattedData.abilities.toString().replace(',',' ')}</p>
                </div>
                    <h1>Sprites</h1>
                <div {...spritesStyles}>
                    {renderSprites(formattedData.sprites)}
                </div>
                <h1>Evolution</h1>
                <div {...evolutionStyles}>{renderEvolution(formattedData.evolution)}</div>
                <Footer/>
            </div>
        }
    }
    return <div {...pokemonStyles}>
        {renderPokemonData()}
    </div>
}

export { Pokemon }