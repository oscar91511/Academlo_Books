import axios from "axios";


const booksApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export default booksApi;