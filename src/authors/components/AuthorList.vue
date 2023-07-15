<script setup lang="ts">
  import type { Author } from '../interfaces/authors.interfaces'
  import { RouterLink } from "vue-router"

interface Props {
    authors: Author[]
}

const props = defineProps<Props>()

props.authors

</script>
<template>
    <ul>
        <li v-for="author in props.authors" :key="author.id">
        <RouterLink :to="{
            name: 'authors-detail',
            params: { id: author.id},
        }"
        >
            {{ author.name }} - {{ author.surname }}
        </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>