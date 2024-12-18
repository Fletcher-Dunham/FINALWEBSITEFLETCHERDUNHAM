<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import wassiliyphoto from "../assets/wassilyphoto.png";
import coupleonhorseback from "../assets/coupleonhorseback.png";
import transverseline from "../assets/transverseline.png";


</script>
<template>
  <primary-template>
    <h1>Wassily Kandinsky</h1>
    <div class="image-container">
      <img :src="wassiliyphoto" alt="Image of Wassily Kandinsky" />
    </div>
    <div class="text-container">
      <p>Wassily Kandinsky (1866–1944) was a groundbreaking Russian painter and art theorist, celebrated as a pioneer of abstract art. Blending vivid colors, geometric shapes, and spiritual themes, his works sought to evoke emotions akin to music. Kandinsky’s influential pieces, such as *Composition VII* and *Yellow-Red-Blue*, explored the connection between form and feeling. His theories on abstraction, articulated in *Concerning the Spiritual in Art*, profoundly shaped modern art movements like Expressionism and Bauhaus.
      </p>
      <h2>Most Notable Works</h2>
    </div>
    <div class="notableworks-container">
      <div class="notablework">
        <h1>Couple on Horseback</h1>
        <img :src="coupleonhorseback" />
        <p>Wassily Kandinsky's *Couple on Horseback* (1906) captures a dreamlike scene with bold colors, dynamic forms, and folk art influences. The painting symbolizes love, unity, and spiritual connection, reflecting Kandinsky's early exploration of abstraction and his fascination with mystical, emotional expression..</p>
      </div>
      <div class="notablework2">
        <h1>Transverse Line</h1>
        <img :src="transverseline" />
        <p>Wassily Kandinsky's *Transverse Line* (1923) exemplifies his abstract style, featuring intersecting geometric shapes, bold lines, and dynamic colors. The composition conveys movement and rhythm, reflecting Kandinsky's belief in the spiritual connection between art, music, and the viewer's emotional experience.</p>
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