import axios from "axios";


export default function deleteCar(id){

    axios.delete(`https://localhost:7295/api/cars/${id}`)
        .then(response => {
            alert('Carro deletado com sucesso!')
            window.location.href = '/home'
        })
        .catch(error => {
            alert('Ocorreu um erro!')
        });
       

}