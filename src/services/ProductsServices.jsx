import axios from "axios";

const REST_API_BASE_PRODUCTS_URL = "http://localhost:9191/api/products";

export const listProducts = () => axios.get(REST_API_BASE_PRODUCTS_URL);