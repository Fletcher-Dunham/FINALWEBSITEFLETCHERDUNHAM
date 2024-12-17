<template>
  <div class="top-nav">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'PreviousArtists' }">Previous Artists</router-link>
    </nav>
  </div>
  <section class="primary-template">
    <header>Artist of the Day</header>

    <section class="main">
      <slot />
    </section>

    <footer>
      <div class="back-to-top">12.17.24</div>
    </footer>
  </section>
</template>

<script setup>

</script>

<style scoped>
.primary-template {
  font-family: "Gill Sans", sans-serif;
}

.primary-template header {
  background-color: #000;
  color: white;
  min-height: 50px;
  font-size: 5rem;
  text-align: center;
  padding-bottom: 1rem;
}

.primary-template footer {
  display: flex;
  background-color: #000;
  color: white;
  padding: 2rem;
  justify-content: center;
}

.router-link-active {
  font-weight: bold;
  background-color: black;
  font-size: 100%;
  color: white;
}

nav {
  display: flex;
  font-size: 1rem;
  margin-top: 1rem;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 1rem;

}

footer {
  margin-top: 1rem;
}
</style>
