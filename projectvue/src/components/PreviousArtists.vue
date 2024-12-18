<script>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import artists from "../../src/artists.js";
import previous from "../assets/previous.svg";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    PrimaryTemplate, //
  },
  computed: {
    previous() {
      return previous
    },
    artists() {
      return artists; //
    },
  },
});
</script>

<template>
  <primary-template>
    <div class="icon-container">
      <img :src="previous" alt="previous icon" />
    </div>
    <div class="header">
      <h1>Previous Artists</h1>
    </div>
    <div class="all-artists">
      <div v-for="artist in artists.data" :key="artist.name" class="artist-card">
        <p>{{ artist.name }}</p>

        <router-link
            :to="artist.name === 'Julie Mehretu' ? '/julie-mehretu' : artist.name === 'Wassily Kandinsky' ? '/wassily-kandinsky' : null"
            v-if="artist.name === 'Julie Mehretu' || artist.name === 'Wassily Kandinsky'"
        >
          <img :src="artist.image" :alt="artist.name" />
        </router-link>

        <template v-else>
          <img :src="artist.image" :alt="artist.name" />
        </template>

        <p>{{ artist.description }}</p>
      </div>
    </div>
  </primary-template>
</template>



<style>
/* Mobile first */
div.all-artists {
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

.artist-card {
  border: 1px solid black;
  text-align: center;
  max-width: 100rem;
  padding: 1.5rem;
  align-content: center;
}


.header h1 {
  text-align: center;
  margin: 2rem auto;
  font-size: 2.5rem;
}


p {
  font-size: 1.2rem;
  text-align: center;
}

img {
  width: 150px;
  height: 150px;
}

/* Tablet and up */
@media screen and (width > 600px) {
  div.all-artists {
    flex-direction: row;
  }

  .artist-card {
    max-width: 300px;
  }
}

/* Desktop and up */
@media screen and (width > 900px) {
  .artist-card {
    flex-direction: row;
    max-width: 300px;
  }
}

.icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
}

.icon-container svg {
  width: 50px;
  height: 50px;
  border: none;
}
</style>