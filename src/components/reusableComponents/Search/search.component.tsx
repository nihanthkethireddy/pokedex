import { useContext, useState } from 'react';
import { SearchContext } from '../../../context/searchContext';
import { searchStyles } from './search.styles';

function Search () {
    const { search, setSearch } = useContext(SearchContext)
    const [ text, updateText ] = useState(search)
    const handleKeyDown = (evt: any) => {
        if (evt.key == 'Enter') {
            const prevSearches: Array<string> = JSON.parse(localStorage.getItem('searches') as any).splice(0,5) || []
            prevSearches.unshift(search)
            localStorage.setItem('searches', JSON.stringify(prevSearches));
            setSearch(text)
        }
    }
    return <div {...searchStyles}>
        <input type='text' placeholder={'Search Pokemons'} onChange={(e)=> updateText(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} value={text}></input>
    </div>
}

export { Search }