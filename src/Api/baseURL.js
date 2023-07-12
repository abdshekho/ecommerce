import axios from "axios";

//create can you make config object like baseURL and other thing
const baseUrl = axios.create({baseURL:"https://syrian-e-commerce.onrender.com/"})

export default baseUrl