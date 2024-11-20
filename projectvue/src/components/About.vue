<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <h1>Request an Artist & About Us</h1>
    <div class="textcontainer">
      <p>The purpose of "Artist of the Day" is to inspire designers and artist. Plenty of times have I found myself looking for inspiration for my next project. This website aims to aid this process and hopefully introduce designers and artists that may be intspiring to you all.</p>
    </div>
    <div class="suggestion">
      <h1>Please suggest future Artists/Designers here!</h1>
      <p>Suggest Artist/Designer Here: {{ message }}</p>
      <input v-model="message" placeholder="Name of Artist" />
      <button @click="submit">Submit</button>
    </div>
  </primary-template>
</template>

<style scoped>
h1 {
  text-align: center;
  padding-top: 1rem;
  font-size: 2rem;
}

.textcontainer p {
  text-align: center;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.5rem;
}

.suggestion {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
}

.suggestion p {
  margin-bottom: 1rem;
}

.suggestion input {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.suggestion button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  text-align: center;
}

.suggestion input,
.suggestion button {
  width: auto;
}

.suggestion button:hover {
  background-color: #0056b3;
}
</style>
