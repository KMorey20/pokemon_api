<!-- src/views/HomeView.vue -->

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PokedexGrid from '@/components/PokedexGrid.vue'
import SiteNav from '@/components/SiteNav.vue'

const router = useRouter()

//----------------------------------------------------------------------------------//

// Define the generations and their respective Pokémon counts
// The start ID is the first Pokémon ID in that generation
// The count is the number of Pokémon in that generation
// The Pokémon IDs are based on the National Pokédex numbering
const generations = [
  { label: 'Generation I', start: 1, count: 151 },
  { label: 'Generation II', start: 152, count: 100 },
  { label: 'Generation III', start: 252, count: 135 },
  { label: 'Generation IV', start: 387, count: 107 },
  { label: 'Generation V', start: 494, count: 156 },
  { label: 'Generation VI', start: 650, count: 72 },
  { label: 'Generation VII', start: 722, count: 88 },
  { label: 'Generation VIII', start: 810, count: 96 },
  { label: 'Generation IX', start: 906, count: 105 }
]

//----------------------------------------------------------------------------------//

// Defined Pokémon types
const types = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting',
  'poison', 'ground', 'flying', 'psychic', 'bug', 'rock',
  'ghost', 'dragon', 'dark', 'steel', 'fairy'
]

//----------------------------------------------------------------------------------//

// Defined reactive variables
// These are used to store the selected generation key, type, and search query
// Using the defined dropdowns and search bar

const selectedGenKey = ref('') // empty = show all
const selectedType = ref('')
const searchQuery = ref('')

//----------------------------------------------------------------------------------//

// Computed property to get the selected generation based on the selectedGenKey
// If selectedGenKey is empty, it returns null
// Otherwise, it returns the generation object from the generations array
// Computed properties are reactive vales that automatically update when their dependencies change

const selectedGen = computed(() =>
  selectedGenKey.value !== '' ? generations[parseInt(selectedGenKey.value)] : null
)

//----------------------------------------------------------------------------------//

// Function to search for a Pokémon by its name
// It trims the search query, converts it to lowercase, and checks if it's not empty
// If it's not empty, it pushes the route to the Pokémon details page with the search query
function searchPokemon() {
  const trimmed = searchQuery.value.trim().toLowerCase()
  if (!trimmed) return
  router.push(`/pokemon/${trimmed}`)
  searchQuery.value = ''
}

//----------------------------------------------------------------------------------//

// Function to clear the search and reset the selected generation and type
// Connected to the clear button in the template
function clearSearch() 
{
  selectedGenKey.value = ''
  selectedType.value = ''
}

//----------------------------------------------------------------------------------//

</script>

<template>

<SiteNav />

<!-- Search -->
  <div id = "sticky_toolbar">

  <div id = "query_row">
  <form @submit.prevent="searchPokemon">
    <label for="search">Search Pokémon:</label>
    <input
      id="search"
      v-model="searchQuery"
      placeholder="e.g. pikachu"
      type="text"
    />
    <button type="submit">Search</button>
  </form>

<!-- Filters -->
<!-- Generation Filter -->
 <div class = "form_group">
    <label for="gen-select">Select Generation:</label>
    <select id="gen-select" v-model="selectedGenKey">
      <option value="">All Generations</option>
      <option v-for="(gen, index) in generations" :key="gen.label" :value="index.toString()">
        {{ gen.label }}
      </option>
    </select>
  </div>

<!-- Type Filter -->
  <div class = "form_group">
    <label for="type-select">Filter by Type:</label>
    <select id="type-select" v-model="selectedType">
      <option value="">All Types</option>
      <option v-for="type in types" :key="type" :value="type">
        {{ type }}
    </option>
  </select>
  </div>

<!-- Clear Button -->
  <button @click="clearSearch">Clear</button>
</div>
</div>

<!-- Render Grids -->
<!-- Conditionally Renders Content-->
<!-- Checks to see if a specific generation has been selected-->
  <div v-if="selectedGen">
    <h2>{{ selectedGen.label }}</h2>
    <PokedexGrid
      :start-id="selectedGen.start"
      :count="selectedGen.count"
      :selected-type="selectedType"
    />
  </div>

<!-- If no generation is selected, render all generations -->
<!-- Loops through the generations array and renders a PokedexGrid for each generation -->
  <div v-else>
    <div v-for="(gen, index) in generations" :key="gen.label">
      <h2>{{ gen.label }}</h2>
      <PokedexGrid
        :start-id="gen.start"
        :count="gen.count"
        :selected-type="selectedType"
      />
    </div>
  </div>
</template>

<style scoped>

/* Sticky Toolbar */
#sticky_toolbar {
  position: sticky;
  top: 0;
  background: white;
  z-index: 999;
  padding: 0 1rem 1rem;
  border-bottom: 1px solid #ccc;
  backdrop-filter: blur(4px);
}

/* Filters and Search Layout */
#query_row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

/* Labels */
#query_row label,
.form_group label {
  font-weight: bold;
  white-space: nowrap;
  margin-right: 0.25rem;
}

/* Input, Select, Button - shared look */
#query_row input,
#query_row select,
#query_row button,
.form_group select {
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover States */
#query_row button:hover,
#query_row select:hover {
  background-color: #0850d7;
  color: white;
  cursor: pointer;
}

/* Filter Form Group */
.form_group {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.header_img {
  display: block;
  margin: 0 auto;
  align-items: center;
}

</style>

