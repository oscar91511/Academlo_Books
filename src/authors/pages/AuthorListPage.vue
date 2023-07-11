<script setup lang="ts">
import useAuthors from '../composables/useAuthors';
import lodingModal from "../../shared/LoadingModal.vue"
import AuthorList from "../components/AuthorList.vue"


const { authors, isLoading } = useAuthors();

</script>
<template>
  <h2>Listado de autores</h2>

  
 //* Authors lists / Lista de Autores

<AuthorList :authors="authors!" />

 //* Loading 


<lodingModal v-if="isLoading" />
</template>
 



<style scoped></style>
