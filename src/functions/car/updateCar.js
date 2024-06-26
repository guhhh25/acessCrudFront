import axios from "axios";

const updateCar = async (car) => {
    try {
        const response = await axios.put(`https://localhost:7295/api/cars/`, {
            Id: car.id,
            BrandId: car.brand,
            Model: car.model,
            Year: car.year,
            Color: car.color,
            BrandName: ""
        });
        if(response.status == 200){
            alert("Marca atualizada com sucesso!")
            window.location.href = '/home'
        }else{
            alert("Ocorreu um erro!")
        }
    } catch (error) {
        console.error("Erro ao atualizar a marca:", error);
        throw error; 
    }
};

export default updateCar;