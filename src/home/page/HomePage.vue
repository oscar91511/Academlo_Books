<script setup lang="ts">
import { ref } from "vue";

const contador = ref(0);

const incrementar = () => {
  contador.value++;
};

const decrementar = () => {
  contador.value--;
};
</script>
<template>
  <div>Home Page</div>
  <div>Contador: {{ contador }}</div>
  <button @click="incrementar">Incrementar</button>
  &nbsp;
  <button @click="decrementar">Decrementar</button>
</template>

<style scoped></style>
