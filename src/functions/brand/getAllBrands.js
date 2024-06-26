import axios from "axios";

export default async function GetAllBrands(){
   const req = await axios.get(`https://localhost:7295/api/brands/`)
    return req.data;

}