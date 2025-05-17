<!-- src/views/MoreDetailsView.vue -->
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { getPokemonDetails } from '@/api/pokeAPI'
import SiteNav from '@/components/SiteNav.vue'

//----------------------------------------------------------------------------------//

const router = useRouter()
const route = useRoute()
const pokemon = ref(null)

//----------------------------------------------------------------------------------//

// Fetches Pokémon details when the component is mounted
onMounted(async () => {
  const name = route.params.name
  pokemon.value = await getPokemonDetails(name)
})

//----------------------------------------------------------------------------------//

// Waits and listens for any changes to the route params
watch(
  () => route.params.name,
  async (newName) => {
    pokemon.value = await getPokemonDetails(newName)
  }
)

//----------------------------------------------------------------------------------//

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

//----------------------------------------------------------------------------------//


//Navigation function for going to the previous Pokémon
// It checks if the current Pokémon ID is greater than 1 before proceeding
async function goBack()
{ 
  const currentId = pokemon.value.id
    if (currentId <= 1) return // No previous Pokémon

    const prevId = currentId - 1

   try {
      const result = await getPokemonDetails(prevId)
      router.push(`/pokemon/${result.name}`)
    } catch (err) {
      console.error('Failed to fetch previous Pokémon', err)
    }
}

//----------------------------------------------------------------------------------//

// Navigation function for going to the next Pokémon
// It checks if the current Pokémon ID is less than 1010 before proceeding
async function goToNext() 
{
  const currentId = pokemon.value.id
    if (currentId >= 1010) return // No next Pokémon

    const nextId = currentId + 1

    try {
      const result = await getPokemonDetails(nextId)
      router.push(`/pokemon/${result.name}`)
    } catch (err) {
      console.error('Failed to fetch next Pokémon', err)
    }


}

//----------------------------------------------------------------------------------//

</script>

<template>

  <SiteNav />

  <br>

  <h1>Pokémon Details</h1>

  <!-- Wrap that puts information into a box -->
  <div id="info_box">
    <div v-if="pokemon" class="details-container">
      <h1 class="pokemon-name">{{ capitalize(pokemon.name) }}</h1>

      <!-- Larger, offical artwork of the Pokemon-->
      <div id="pokemon-sprite">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          class="official-art"
        />
      </div>

      <!-- Pokedex Number and Type -->
      <p><strong>ID:</strong> {{ pokemon.id }}</p>
      <p><strong>Types:</strong> {{ pokemon.types.map(t => capitalize(t.type.name)).join(', ') }}</p>

      <!-- Pokemon Stat Block -->
      <h2>Stats</h2>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.stat.name">
          {{ capitalize(stat.stat.name) }}: {{ stat.base_stat }}
        </li>
      </ul>

      <!-- Back Button -->
      <button class="nav_buttons" @click="goBack" :disabled="pokemon.id <= 1">
        Previous Pokémon
      </button>

      <!-- Next Button -->
      <button class="nav_buttons" @click="goToNext" :disabled="pokemon.id >= 1010">
        Next Pokémon
      </button>

      <br />

      <!-- Returns to the Home Page / Pokemon grid -->
      <router-link to="/">
        <button id="return_button" class="nav_buttons">
          ⬅ Back to Pokédex
        </button>
      </router-link>
    </div>

    <!-- For if the Pokemon is taking time to load from the API-->
    <div v-else>
      <p>Loading Pokémon data...</p>
    </div>
  </div>
</template>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.details-container {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}

.official-art {
  width: 300px;
  height: auto;
}

.pokemon-name {
  font-size: 2rem;
  margin-bottom: 1rem;
}

#pokemon-sprite 
{
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 8px;
  border: 3px solid rgb(170, 170, 170);
}

#info_box 
{
  min-width: 900px;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.nav_buttons 
{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

#return_button 
{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

ul 
{
  list-style-type: none;
  padding: 0;
}

h2
{
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
