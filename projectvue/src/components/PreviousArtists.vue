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
      <div class="header">
      <h1>Previous Artists</h1>
      </div>
      <div class="all-artists">
        <div v-for="artist in artists.data" :key="artist.name" class="artist-card">
          <p>{{ artist.name }}</p>
          <img :src="artist.image" :alt="artist.name"/>
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



  .artist-card {
    border: 1px solid black;
    text-align: center;
    max-width: 100rem;
    padding: 1.5rem;
    align-content: center;
  }

    .header h1 {
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
    }


    img {
      border: 3px solid #000000;
      width: 150px;
      height: 150px;
    }


  /* These styles are for tablet and up */
  @media screen and (width > 600px) {
    flex-direction: row;
    .artist-card {
      max-width: 300px;
    }
  }

  /* This is for desktop and up */
  @media screen and (width > 900px) {
    .artist-card {
      flex-direction: row;
      max-width: 300px;
    }
  }
}
</style>
