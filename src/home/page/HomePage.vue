<script setup lang="ts">
import { ref } from "vue";

const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const decrementar = () => {
  contador.value--;
};

const fruts = [        //* List of fruits
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Strawberry" },
  { id: 5, name: "Pear" },
];
</script>

<template>
  <div>Home Page</div>
  <div>Contador: {{ contador }}</div>
  <button @click="incrementar">Incrementar</button>
  &nbsp;
  <button @click="decrementar">Decrementar</button>

  <ul>
    
    <li v-for="frut in fruts" :key="frut.id">{{ frut.name }}</li>
    
  </ul>
</template>

<style scoped></style>
