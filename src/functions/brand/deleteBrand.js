import axios from "axios";


export default function deleteBrand(id){
    axios.delete(`https://localhost:7295/api/brands/${id}`)
        .then(response => {
            alert('Marca deletada com sucesso!')
            window.location.href = "/home"
        })
        .catch(error => {
            alert('Esta marca ja esta em uso!')
        });
       

}