import { createContext } from "react";

const SearchContext = createContext({
    search: '',
    setSearch: (txt: any) => {}
});

export { SearchContext }