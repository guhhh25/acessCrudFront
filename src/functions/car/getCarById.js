import axios from "axios";

const getCarById = async (id) => {
    try {
        const response = await axios.get(`https://localhost:7295/api/cars/${id}`);
        return response.data; 
    } catch (error) {
        console.error("Erro ao buscar a marca:", error);
        throw error;
    }
};

export default getCarById;