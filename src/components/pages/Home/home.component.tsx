import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ALL_POKEMONS } from '../../../apollo/queries';
import { SearchContext } from '../../../context/searchContext';
import Card from '../../reusableComponents/Card';
import Footer from '../../reusableComponents/Footer';
import Recents from '../../reusableComponents/Recents';
import Search from '../../reusableComponents/Search';
import { bodyStyles, homeStyles, placeholderStyles, recentSearchStyles, cardStyles } from './home.styles';
import { IPokemonData } from './home.types';

const formatData = (data: any) => {
    const formattedData: Array<IPokemonData> = data && data.results.map((pokemon: any) => {
        return {
            name: pokemon.name,
            id: pokemon.id,
            abilities: pokemon.abilities.map((abl: any) => abl.pokemon_v2_ability.name),
            exp: pokemon.base_experience,
            img: JSON.parse(pokemon.details[0].sprites).front_default
        }
    })
    return formattedData
}

function Home() {
    const [pokemonData, setPokemonData] = useState([] as Array<Partial<IPokemonData>>)
    const [search, setSearch] = useState('')
    const { loading, error, data } = useQuery(GET_ALL_POKEMONS(search));
    const contextObject = {
        search,
        setSearch: setSearch as any
    }

    const renderCards = () => {
        if (pokemonData && pokemonData.length > 0) {
            return pokemonData.map((pokemon)=> <Card pokemon={pokemon} />)
        }
        if (loading) {
            return <div>Loading...</div>
        }
        if(!data) {

            return <div>No Data Found</div>
        }
    }

    useEffect(() => {
        if (data) {
            const formattedPokemonData: Array<Partial<IPokemonData>> = formatData(data)
            setPokemonData(formattedPokemonData)
        }
    }, [loading, error, data])
    return <SearchContext.Provider value={contextObject}>
        <div {...homeStyles}>
            <Search />
            <div {...bodyStyles}>
                <div {...placeholderStyles}></div>
                <div {...cardStyles}>{renderCards()}</div>
                <div {...recentSearchStyles}><Recents/></div>
            </div>
            <Footer />
        </div>
    </SearchContext.Provider>
}

export { Home }