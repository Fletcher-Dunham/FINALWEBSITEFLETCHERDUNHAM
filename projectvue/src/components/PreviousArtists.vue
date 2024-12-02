<script>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import artists from "../../src/artists.js";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PrimaryTemplate, //
  },
  computed: {
    artists() {
      return artists; //
    },
  },
});
</script>

<template>
  <primary-template>
    <div>
      <h1>Previous Artists</h1>

      <div class="all-artists">
        <div v-for="artist in artists.data" :key="artist.name" class="artist-card">
          <p>{{ artist.name }}</p>
          <img :src="artist.image" :alt="artist.name"/>
          <p>{{ artist.description }}</p>
        </div>
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
  //flex-direction: column;

  .artist-card {
    border: 1px solid black;
    text-align: center;
    width: 100%;

    p {
      font-size: 1.2rem;
      text-align: center;
    }

    h1 {
      text-align: center;
      font-size: 1.5rem;
    }

    img {
      border: 3px solid #ff0000;
      width: 150px;
      height: 150px;

    }
  }

  /* These styles are for tablet and up */
  @media screen and (width > 600px) {
    flex-direction: row;

    .artist-card {
      max-width: 200px;
    }
  }

  /* This is for desktop and up */
  @media screen and (width > 900px) {
    .artist-card {
      max-width: 300px;
    }
  }
}
</style>
