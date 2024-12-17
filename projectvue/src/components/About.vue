<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import artisticon from "../assets/artisticon.svg";
</script>

<template>
  <primary-template>
    <div class="icon-container">
      <img :src="artisticon" alt="Artist Icon" />
    </div>
    <h1>Request an Artist & About Us</h1>
    <div class="textcontainer">
      <p>The purpose of "Artist of the Day" is to inspire designers and artists like myself. Many times I find myself looking for inspiration online for my next project but can't do this in a timely fashion. This site aims to give you inspiration regardless of the project and allow yourself to broaden your knowledge of past and present artists that have created impactful designs during their careers.</p>
    </div>
    <div class="suggestion">
      <h1>Please suggest future Artists/Designers here!</h1>
      <p>Suggest Artist/Designer Here: {{ message }}</p>
      <input v-model="message" placeholder="Name of Artist" />
      <button @click="submit">Submit</button>
    </div>
    <div class="artistimage">
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
  margin-bottom: 1rem;
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
  margin-bottom: 1rem;
}

.suggestion input,
.suggestion button {
  width: auto;
}

.suggestion button:hover {
  background-color: #0056b3;
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
