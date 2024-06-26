import axios from "axios"

export default function CreateBrand(brandName){
    const url = 'https://localhost:7295/api/brands'

   let req =  axios.post(url, {
        Name: brandName
    }).then((response) =>{
       if(response.status === 200){
        alert("Marca criada com sucesso!")
        window.location.href = '/home'
       }
    }) .catch(error => {
        if (error.response) {
           alert("Este nome esta indisponivel!")
        }
      
    });


    
}