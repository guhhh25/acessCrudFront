import { useEffect, useState } from "react";
import CreateBrand from "../functions/brand/createBrand";
import getBrandById from "../functions/brand/getBrandById";
import { useParams } from "react-router-dom";
import updateBrand from "../functions/brand/updateBrand";

export default function EditBrand() {
  const [brandName, setBrandName] = useState("");
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBrandById(id);
        setBrandName(response.name);
      } catch (error) {
        console.error("Erro ao buscar a marca:", error);
      }
    };

    fetchData();
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    updateBrand(
        
        id,
        brandName
    )
    
   
    setBrandName(''); 
  };
  return (
    <div className="container mt-5">
      <h2>Editar Marca</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brandName">Nome da Marca</label>
          <input
            type="text"
            className="form-control"
            id="brandName"
            placeholder="Digite o nome da marca"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Editar Marca
        </button>
      </form>
    </div>
  );
}
