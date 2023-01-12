import { recentStyles } from "./recent.styles"

function Recents () {
    const renderSearches = () => {
        const prevSearches = JSON.parse(localStorage.getItem('searches') as any)
        const keys = prevSearches && prevSearches.map((key: any) => {
            return <p>{key}</p>
        })
        return keys
    }
    return <div {...recentStyles}>
        <p>Recent Searches:</p>
        {renderSearches()}
    </div>
}

export {Recents}