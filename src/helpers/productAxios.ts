import axios from "axios";

const URL = import .meta.env.VITE_API_URL;

export const productAxios = {
    getProducts: async () => {
        const { data } = await axios.get(URL);
        return data;
    },
    getProduct: async (id: number) => {
        const { data } = await axios.get(URL + id);
        return data;
    }
    


}