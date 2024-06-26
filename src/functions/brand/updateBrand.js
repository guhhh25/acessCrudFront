import axios from "axios";

const updateBrand = async (id, brandName) => {
    try {
        const response = await axios.put(`https://localhost:7295/api/brands/${id}`, {
            id: id,
            name: brandName
        });
        if(response.status == 200){
            alert("Marca atualizada com sucesso!")
            window.location.href = '/home'
        }else{
            alert("Este nome esta indisponivel!")
        }
    } catch (error) {
        console.error("Erro ao atualizar a marca:", error);
        throw error; 
    }
};

export default updateBrand;