<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import marcelbreuer from "../assets/marcelbreuer.png";
import wassilychair from "../assets/wassilychair.png";
import s40cabinet from "../assets/s40cabinet.png";

</script>

<template>
  <primary-template>
    <h1>Marcel Breuer</h1>
    <div class="image-container">
      <img :src="marcelbreuer" alt="Image of Marcel Breuer" />
    </div>
    <div class="text-container">
      <p>
        Marcel Breuer (1902-1981) was a Hungarian-American architect and designer, celebrated as one of the 20th century's most influential pioneers of Modernism. His innovative approach to both furniture and architecture reflected a deep understanding of form, function, and material. Breuer initially gained recognition at the Bauhaus in Germany, where he studied and later taught under the mentorship of Walter Gropius. He became especially known for his furniture designs, including the iconic Wassily Chair, crafted from tubular steel. This piece was revolutionary for its minimalist design and use of industrial materials, demonstrating Breuer's desire to integrate art with mass production—a central tenet of the Bauhaus philosophy.
        After leaving Europe in the late 1930s due to the rising political tensions, Breuer emigrated to the United States, where he made a significant impact on American architecture. Working closely with Gropius at Harvard University, Breuer helped popularize Modernism in the U.S., influencing a generation of architects and students. He moved away from his earlier focus on furniture design to concentrate on architecture, using a similar emphasis on clean lines, industrial materials, and functional spaces. Notable works from this period include the Whitney Museum of American Art in New York and Saint Francis de Sales Church in Muskegon, Michigan, both distinguished by their bold use of concrete and Brutalist style. Breuer’s architectural works emphasized raw materials and strong geometric forms, challenging traditional aesthetics and inspiring new approaches to building design.
        Breuer's legacy is evident in both his designs and his influence on architectural thought, as he bridged the gap between Bauhaus ideals and modern architectural practices in America and beyond. His work embodied the Bauhaus principle that "form follows function," creating spaces and objects that were both beautiful and utilitarian. Breuer's emphasis on modular, adaptable designs contributed to the development of post-war architectural styles, including Brutalism, which he helped to shape through his inventive use of concrete. His contribution to design and architecture endures, as his creations remain celebrated for their simplicity, structural clarity, and adaptability, illustrating how Breuer’s vision and methods remain relevant even decades after his passing.
      </p>
      <h2>Most Notable Works</h2>
    </div>
    <div class="notableworks-container">
      <div class="notablework">
        <h1>Wassily Chair</h1>
        <img :src="wassilychair" />
        <p>Marcel Breuer designed the Wassily Chair, also known as the Model B3 chair, in 1925. While teaching at the Bauhaus, Breuer was inspired by the tubular steel of bicycle frames and used this material to create a chair that was both lightweight and strong. The Wassily Chair was revolutionary at the time due to its minimalist design and industrial materials, which exemplified the Bauhaus movement’s emphasis on combining art with modern manufacturing techniques. Although the chair was not originally named after him, it later became associated with the painter Wassily Kandinsky, who admired Breuer's work and had one of the first versions of the chair made for his studio.</p>
      </div>
      <div class="notablework2">
        <h1>S40 Cabinet</h1>
        <img :src="s40cabinet" />
        <p>Marcel Breuer always had a structural and architectural way of thinking. The S40 glass cabinet looks like a miniature New York skyscraper: its stacked elements are clearly discernible, its construction surprising. It looks as if Breuer had simply inserted the base under its lean struts. As a result, it has two completely different faces. The sides jut outwards and inwards, creating a cantilever shape. By no means a monolith, Breuer designed a dynamic sculpture resembling large forklift trucks that pick up and transport containers at a port.</p>
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