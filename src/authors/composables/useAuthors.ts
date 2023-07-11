import { useQuery } from "@tanstack/vue-query";
import booksApi from "../../api/books-api";
import type { Author, AuthorsResAPI } from "../interfaces/authors.interfaces";
import { useAuthorsStore } from "./../../store/authors";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const getAuthors = async (): Promise<Author[]> => {
  const { data } = await booksApi.get<AuthorsResAPI>("/authors");

  return data.authors;
};

const useAuthors = () => {
  const store = useAuthorsStore();
  const { authors } = storeToRefs(store);

  const { isLoading, data } = useQuery(["authors"], () => getAuthors());

  watch(data, (authors) => {
    if (authors) store.setAuthors(authors);
  });
  return {
    authors,
    isLoading
  }
};

export default useAuthors;
