<script setup>
</script>

<template>
  <section class="primary-template">
    <header>Artist of the Day</header>

    <section class="main">
      <slot />
    </section>

    <footer>
      <div class="back-to-top">Archive of Artists</div>
    </footer>
  </section>
</template>

<style scoped>
.primary-template {
  font-family: "Gill Sans", sans-serif;
}

.primary-template header {
  background-color: #000;
  color: white;
  min-height: 50px;
  padding: 1rem;
  font-size: 3rem;
  text-align: center;
}

.primary-template footer {
  display: flex;
  background-color: #000;
  color: white;
  padding: 3rem;
  justify-content: center;
}
</style>
