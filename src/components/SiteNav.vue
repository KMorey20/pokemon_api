<!-- Site Navigation Component -->
<!-- Used on each Accessible Page -->

<script>
export default 
{
    name: "SiteNav",
};
</script>

<template>
<img class="header_img" src="/International_Pokémon_logo.png" alt="Pokédex" width="341" height="125" />
<h1>Welcome to the Pokédex!</h1>

<nav>

  <!-- Returns to the Poke Grid Page-->
 <RouterLink
    to="/"
    class="home-link"> Home </RouterLink>

  <!-- Information about the Application -->
  <RouterLink
    to="/about"
    class="home-link"> About </RouterLink>

  <!-- Information about the Pokemon Series-->
  <RouterLink
    to="/guide"
    class="home-link"> Guide </RouterLink>

  <!-- Information about the Pokemon Generations-->
  <RouterLink
    to="/generations"
    class="home-link"> Generations </RouterLink>

  <!-- Fun link to my favourite pokemon-->
  <RouterLink
    to="/pokemon/empoleon"
    class="home-link"> My Favourite Pokemon</RouterLink>

</nav>
</template>

<!-- Site Nav Styles -->
<style scoped>
.home-link
{
  text-decoration: none;
  color: #007BFF;
  font-size: 1.2rem;
  margin: 0.5rem;
}

nav
{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  backdrop-filter: blur(4px);
}

</style>
