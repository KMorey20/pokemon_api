<!-- src/components/PokedexGrid.vue -->
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  getGenPokemonList,
  getPokemonByType,
  getPokemonDetails
} from '@/api/pokeAPI'

//----------------------------------------------------------------------------------//

const props = defineProps({
  startId: Number,
  count: Number,
  selectedType: String
})

const pokemonList = ref([])
const hovered = ref(null)
const router = useRouter()

//----------------------------------------------------------------------------------//

// Function to navigate to the Pokémon details page
function goToDetails(name) 
{
  router.push(`/pokemon/${name}`)
}

//----------------------------------------------------------------------------------//

// Function to load detailed Pokémon data
// Takes a basic list of Pokémon and fetches their details
async function loadPokemonList(basicList) 
{
  const detailedList = await Promise.all(
    basicList.map(async (p) => {
      const details = await getPokemonDetails(p.name)
      return {

        // pokemon id
        id: p.id,

        // pokemon name
        name: p.name,

        // pokemon sprite - pixel art for display
        sprite: details.sprites.front_default,

        // pokemon srpite - alternate art for display (hover state)
        shiny: details.sprites.front_shiny
      }
    })
  )
  pokemonList.value = detailedList
}

//----------------------------------------------------------------------------------//

// Function to fetch Pokémon data based on selected type or generation
// If no type is selected, it fetches a list of Pokémon from the specified startId and count
// If a type is selected, it fetches Pokémon of that type and filters them based on startId and count
async function fetchData() 
{
  if (!props.selectedType) 
  {
    const basicList = await getGenPokemonList(props.startId, props.count)
    await loadPokemonList(basicList)
  } else {
    
    const typeList = await getPokemonByType(props.selectedType)

    const filtered = typeList.filter(
      (p) => p.id >= props.startId && p.id < props.startId + props.count
    )
    await loadPokemonList(filtered)
  }
}

//----------------------------------------------------------------------------------//

// Listens for changes in the selected type, startId, and count props
onMounted(fetchData)
watch(() => [props.startId, props.count, props.selectedType], fetchData)

//----------------------------------------------------------------------------------//

</script>

<!-- Displays a grid of Pokémon cards with their sprites and names -->
<template>
  <div class="pokedex-grid">
    <div
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      class="pokemon-card"
      @click="() => goToDetails(pokemon.name)"
      @mouseenter="hovered = pokemon.name"
      @mouseleave="hovered = null"
    >
      <img
        :src="hovered === pokemon.name ? pokemon.shiny : pokemon.sprite"
        :alt="pokemon.name"
      />
      <p>#{{ pokemon.id }}</p>
      <p>{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<!-- CSS styles for the Pokedex grid and Pokémon cards -->
<style scoped>
.pokedex-grid {
  background: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  max-width: 900px;
  margin: 0 auto;
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.pokemon-card {
  text-align: center;
  border: 3px solid rgb(170, 170, 170);
  border-radius: 8px;
  padding: 1rem;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: transform 0.2s ease;
}


.pokemon-card:hover {
  transform: scale(1.05);
  border: 3px solid #ff0000;
}

.pokemon-card img {
  width: 80px;
  height: 80px;
}

p {
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0%;
  margin: 0%;
}
</style>
