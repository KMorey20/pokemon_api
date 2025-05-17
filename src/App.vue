<!-- src/App.vue -->
<template>
  <router-view />
</template>

<!-- 

Information:
Pokemon API
This application is a Pokédex that allows users to search for Pokémon by name, generation, and type. 
It provides detailed information about each Pokémon, including its abilities, stats, and evolutions.

Pokemon is a franchise created by Satoshi Tajiri and Ken Sugimori, and it has become a global phenomenon since its inception in 1996.
The Pokémon franchise includes video games, trading card games, animated TV shows, movies, and merchandise.

The goal of the series overall is to catch and train Pokémon to battle against other trainers. Besides that, players of the game
are encouraged to capture all species available in their respective games, which are seperated by generations. Similarly to how
a lot of species on Earth are only found in certain regions, Pokemon are also only found in the various regions, which are introduced
in each new title.

This application allows users to query by generation, type, and name. The application is built using Vue.js and the PokeAPI, which 
is a RESTful API that provides access to Pokémon data. While there is a lot of data available, this application only focuses on the
names, dex numbers, sprites, and stats of the Pokémon.

PokedexGrid.vue:
This component is responsible for displaying the Pokémon grid. It takes in props for the starting ID, count, and selected type.
It fetches the Pokémon data from the API and displays it in a grid format. Each Pokémon card shows the sprite, name, and ID. 
When a card is clicked, it navigates to the Pokémon details page.

MoreDetailsView.vue:
This component is responsible for displaying detailed information about a specific Pokémon. It fetches the Pokémon data from the API
based on the name passed in the route. It displays the Pokémon's sprite, ID, types, and stats.
It also provides navigation buttons to go to the previous and next Pokémon in the Pokédex.

HomeView.vue:
This component is responsible for the main page of the application. It allows users to select a generation and type to filter the Pokémon displayed.
It also includes a search bar for users to search for Pokémon by name. 
When a generation is selected, it fetches the Pokémon data and passes it to the PokedexGrid component for display.
The application uses Vue Router for navigation between the main page and the Pokémon details page.
This application is a simple and effective way to explore the Pokémon universe and learn more about each Pokémon's abilities and stats.
This application is a Pokédex that allows users to search for Pokémon by name, generation, and type.

Data Queries in this Application:

-> Pokemon by Generations:
- Generation I: 1-151
- Generation II: 152-251
- Generation III: 252-386
- Generation IV: 387-493
- Generation V: 494-649
- Generation VI: 650-721
- Generation VII: 722-809
- Generation VIII: 810-905
- Generation IX: 906-1010

-> Pokemon by Types:
- Normal
- Fire
- Water
- Grass
- Electric
- Ice
- Fighting
- Poison
- Ground
- Flying
- Psychic
- Bug
- Rock
- Ghost
- Dragon
- Dark
- Steel
- Fairy

-> Pokemon By name

-->