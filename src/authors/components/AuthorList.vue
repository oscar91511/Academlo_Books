<script setup lang="ts">
  import type { Author } from '../interfaces/authors.interfaces'

interface Props {
    authors: Author[]
}

const props = defineProps<Props>()

props.authors

</script>
<template>
    <ul>
        <li v-for="author in props.authors" :key="author.id">
        {{ author.name }} - {{ author.surname }}
        </li>
    </ul>
</template>

<style scoped>

</style>