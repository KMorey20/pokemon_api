<!-- About Page -->
<!-- This page provides information about the Pokédex application and its features -->

<script setup lang="ts">
  import SiteNav from '@/components/SiteNav.vue'
</script>

<template>
  <SiteNav />

  <div class="shared-container">
    <h1>About This Pokédex</h1>

    <section>
      <h2> What This App Does </h2>
      <p>
        This application is a Pokédex that allows users to search for Pokémon by <strong>name</strong>, <strong>generation</strong>, and <strong>type</strong>.
        It provides detailed information about each Pokémon, including its ID, types, stats, and official artwork.
      </p>
    </section>

    <section>
      <h2> Technologies Used </h2>
      <ul>
        <li><strong>Vue.js</strong> - JavaScript framework for building the app</li>
        <li><strong>Vue Router</strong> - For navigating between views</li>
        <li><strong>PokeAPI</strong> - RESTful API providing Pokémon data</li>
      </ul>
    </section>

    <section>
      <h2> Pokémon Franchise </h2>
      <p>
        Pokémon is a franchise created by Satoshi Tajiri and Ken Sugimori. Since its debut in 1996, it has evolved into a global
        phenomenon, including video games, trading cards, animated shows, movies, and merchandise.
      </p>
      <p>
        The central goal of Pokémon games is to catch, train, and battle with Pokémon while striving to "catch 'em all" — filling out the
        Pokédex with every species. Like how real-world animals are region-specific, Pokémon are introduced in different regions, which are
        revealed through various game generations.
      </p>
    </section>

    <section>
      <h2> Features </h2>
      <ul>
        <li>Filter Pokémon by <strong>generation</strong> or <strong>type</strong></li>
        <li>Search Pokémon by <strong>name</strong></li>
        <li>View <strong>detailed info</strong> including stats, types, and sprite</li>
        <li>Navigate between Pokémon using <strong>Next/Previous</strong> buttons</li>
      </ul>
    </section>

    <section>
      <h2> Components Overview </h2>
      <ul>
        <li><strong>HomeView.vue</strong> – Main interface, search and filter Pokémon</li>
        <li><strong>PokedexGrid.vue</strong> – Grid display of Pokémon with filtering and navigation</li>
        <li><strong>MoreDetailsView.vue</strong> – Individual Pokémon details with navigation</li>
      </ul>
    </section>

    <section>
      <h2> Data Queries Supported </h2>
      <p><strong>→ Pokémon by Generation:</strong></p>
      <ul>
        <li>Gen I: 1–151</li>
        <li>Gen II: 152–251</li>
        <li>Gen III: 252–386</li>
        <li>Gen IV: 387–493</li>
        <li>Gen V: 494–649</li>
        <li>Gen VI: 650–721</li>
        <li>Gen VII: 722–809</li>
        <li>Gen VIII: 810–905</li>
        <li>Gen IX: 906–1010</li>
      </ul>

      <p><strong>→ Pokémon by Type:</strong></p>
      <p>Normal, Fire, Water, Grass, Electric, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy</p>

      <p><strong>→ Pokémon by Name:</strong></p>
      <p>Use the search bar on the home page to look up Pokémon by name directly.</p>
    </section>
  </div>
</template>