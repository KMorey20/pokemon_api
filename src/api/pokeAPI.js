// src/api/pokeAPI.js

// Responsible for fetching Pokémon data from the PokeAPI
// and returning it in a usable format.
// This file contains functions to get a list of Pokémon,
// get Pokémon details, and get Pokémon by type.

//----------------------------------------------------------------------------------//

const BASE = 'https://pokeapi.co/api/v2'

//----------------------------------------------------------------------------------//

// Fetches all availble Pokemon from the PokeAPI
// and returns a list of Pokemon with their names and IDs.
// The API currently has access to 1010 Pokemon.

// **startId**: The starting ID of the Pokémon to fetch
// This is determined by the starting ID of the pokemon in a specific generation.
// The StartID comes from the generations array in the HomeView.vue file.
// The start property of each generation is passed as a prop in PokedexGrid.vue
// *Flow of data: HomeView.vue -> PokedexGrid.vue (prop) -> pokeAPI.js

// **count**: The number of Pokémon to fetch
// This is determined by the number of Pokémon in a specific generation.
// The count property is passed as a prop in PokedexGrid.vue
// The count acts as a limit for the number of Pokémon to fetch from the API.
// This allows the user to fetch a specific number of Pokémon from the API
// based on the generation they are interested in.

// Eg. If the user selects Generation 1, the startId is 1 and the count is 151.
// Eg. If the user wants all the Pokemon, the startId is 1 and the count is 1010.

export async function getGenPokemonList(startId, count) 
{
  // Fetches a list of Pokémon from the PokeAPI
  const res = await fetch(`${BASE}/pokemon?limit=${count}&offset=${startId - 1}`)

  // Parses the JSON response from the API
  const data = await res.json()

  // Map -> transforms each Pokemon object into a simplier format
  // and returns an array of objects with name and id properties.
  return data.results.map((p, i) => ({
    name: p.name,
    id: startId + i
  }))

}

//----------------------------------------------------------------------------------//

// Using either the name or id, this function fetches the details of a specific Pokémon
// These details are displayed in the MoreDetailsView.vue view

// **nameOrId**: parameter can be either a string (name) or a number (id)

export async function getPokemonDetails(nameOrId) {
  const safeParam = typeof nameOrId === 'string'
    ? nameOrId.toLowerCase().trim()
    : nameOrId 

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${safeParam}`)
  if (!res.ok) throw new Error('Pokémon not found')
  return await res.json()
}

//----------------------------------------------------------------------------------//


// Fetches a list of Pokémon by type from the PokeAPI
// and returns a list of Pokémon with their names and IDs.

// **type**: The type of Pokémon to fetch

export async function getPokemonByType(type) 
{
  const res = await fetch(`${BASE}/type/${type}`)
  const data = await res.json()

  return data.pokemon.map(entry => 
    {
    const url = entry.pokemon.url
    const idMatch = url.match(/\/pokemon\/(\d+)\//)
    const id = idMatch ? parseInt(idMatch[1]) : null
    return { name: entry.pokemon.name, id }

  }).filter(p => p.id !== null)
}

//----------------------------------------------------------------------------------//