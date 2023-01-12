const formatPokemonData = (data: any) => {
    const stats = data.stats[0]
    return {
        name: stats.name,
        exp: stats.base_experience,
        height: stats.height,
        sprites: JSON.parse(stats.details[0].sprites),
        abilities: stats.abilities.map((abl: any) => abl.pokemon_v2_ability.name),
        moves: data.moves.map((mv: any) => mv.name),
        evolution: data.evolution[0].species
    }
}

export { formatPokemonData }