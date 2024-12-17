<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import julieimage from "../assets/julieimage.png";
import construction from "../assets/construction.png";
import stadia2 from "../assets/stadia2.png";
</script>
<template>
  <primary-template>
    <h1>Julie Mehretu</h1>
    <div class="image-container">
      <img :src="julieimage" alt="Image of Julie Mehretu" />
    </div>
    <div class="text-container">
      <p>
        Julie Mehretu (b. 1970) is an Ethiopian-American contemporary artist known for her large-scale abstract paintings that explore themes of urban landscapes, social change, and global interconnectedness. Born in Addis Ababa, Ethiopia, and later raised in Michigan, Mehretu’s work combines elements of cartography, architecture, and gestural mark-making to create complex, layered compositions. Her paintings often feature intricate lines, geometric shapes, and vibrant color, symbolizing the chaotic energy of modern life and the histories embedded within spaces.
        Mehretu’s art reflects political and cultural narratives, addressing migration, identity, and displacement while inviting viewers to interpret and engage with her visual language. Her notable works, such as *Mogamma* and *Black City*, have been exhibited globally, including at the Museum of Modern Art (MoMA). A MacArthur “Genius” Fellow, Mehretu remains a significant voice in contemporary art, celebrated for her innovative style and thought-provoking approach to abstraction.
      </p>
      <h2>Most Notable Works</h2>
    </div>
    <div class="notableworks-container">
      <div class="notablework">
        <h1>Stadia II</h1>
        <img :src="stadia2" />
        <p>*Stadia II* (2004) by Julie Mehretu is a large-scale abstract painting that explores themes of globalization, sports, and architecture. Layers of geometric shapes, sweeping lines, and vibrant colors create a dynamic composition resembling stadiums and urban landscapes, symbolizing collective gatherings, movement, and the complexity of contemporary global culture.</p>
      </div>
      <div class="notablework2">
        <h1>Empirical Construction</h1>
        <img :src="construction" />
        <p>*Empirical Construction* (2003) by Julie Mehretu is a layered abstract work that merges architectural blueprints, sweeping gestures, and geometric forms. Through intricate lines and transparent layers, Mehretu explores themes of urbanization, human interaction, and societal structures, reflecting the chaotic yet organized nature of modern cities and constructed environments.</p>
      </div>
    </div>
  </primary-template>
</template>


<style scoped>
h1 {
  text-align: center;
  font-size: 3rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
}

img {
  max-width: 25rem;
  max-height: 25rem;
  width: 100%;
  height: auto;
}

h2 {
  font-size: 2rem;
  text-align: center;
}

.notableworks-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15rem;
}

.notablework, .notablework2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.notablework h1, .notablework2 h1 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.notablework img {
  margin-bottom: .5rem;
}

.notablework p {
  max-width: 25rem;
}

.notablework2 p {
  max-width: 25rem;
  margin-bottom: 7rem;
  text-align: center;
}

</style>