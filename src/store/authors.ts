import type { Author } from "./../authors/interfaces/authors.interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthorsStore = defineStore("authors", () => {
  const authors = ref<Author[]>();

  return {
    authors,
//* Actions / Acciones

    setAuthors(newAuthors: Author[]) {
        authors.value = newAuthors;
    },

  };
});
