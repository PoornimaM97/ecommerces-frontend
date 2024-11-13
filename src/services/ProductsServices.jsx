import axios from "axios";

const REST_API_BASE_PRODUCTS_URL = "http://localhost:9191/api/products";

export const addProducts = (productsData) => axios.post(REST_API_BASE_PRODUCTS_URL);

export const listProducts = () => axios.get(REST_API_BASE_PRODUCTS_URL);

export const listProductsById = (id) => axios.get(REST_API_BASE_PRODUCTS_URL + `${id}`);