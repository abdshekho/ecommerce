import axios from "axios";

//create can you make config object like baseURL and other thing
const baseUrl = axios.create({baseURL:"https://syrian-e-commerce.onrender.com/"})
// const baseUrl = axios.create({baseURL:"http://127.0.0.1:8000/"})

export default baseUrl