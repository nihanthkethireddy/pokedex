import { gql } from "@apollo/client";

const GET_ALL_POKEMONS = (name: string) => gql`
    query PokemonListQuery {
    	results: pokemon_v2_pokemon${name ? `(where: {name: {_iregex: ${name}}})` : ''}{
        name
        id
        base_experience
        abilities: pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        details: pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
`;

const GET_POKEMON_BY_ID = (id: number) => gql`
query pokemonDetailed {
  stats: pokemon_v2_pokemon(where: {id: {_eq: ${id}}}){
    name
    base_experience
    abilities: pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
      }
    }
    height
    pokemon_species_id
    details: pokemon_v2_pokemonsprites {
      sprites
    }
  }
  moves: pokemon_v2_pokemonmove(where: {id: {_eq: ${id}}}) {
    pokemon_v2_move {
      accuracy
      name
    }
  }
  evolution: pokemon_v2_evolutionchain(where: {pokemon_v2_pokemonspecies: {id: {_eq: ${id}}}}) {
    species: pokemon_v2_pokemonspecies {
      base_happiness
      capture_rate
      id
      evolves_from_species_id
      name

    }
  }
}
`;

const SEARCH_POKEMONS = (name: string) => gql`
  results: pokemon_v2_pokemon(where: {name: {_iregex: ${name}}}) {
    name
  }
`;

export { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, SEARCH_POKEMONS }