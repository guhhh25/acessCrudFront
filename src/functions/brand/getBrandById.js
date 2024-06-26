import axios from "axios";

const getBrandById = async (id) => {
    try {
        const response = await axios.get(`https://localhost:7295/api/brands/${id}`);
        return response.data; 
    } catch (error) {
        console.error("Erro ao buscar a marca:", error);
        throw error; 
    }
};

export default getBrandById;