import axios from "axios";

export default function CreateCar(car){
    const url = 'https://localhost:7295/api/cars'

    let req =  axios.post(url, {
         BrandId: car.brand,
         Model: car.model,
         Year: car.year,
         Color: car.color ?? "",
         BrandName: ""
     }).then((response) =>{
        if(response.status === 200){
         alert("Carro criado com sucesso!")
         window.location.href = '/home'
        }
     }) .catch(error => {
         if (error.response) {
            alert("Houve um erro!")
         }
       
     });
}