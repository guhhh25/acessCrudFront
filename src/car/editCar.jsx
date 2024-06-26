import { useEffect, useState } from "react"
import GetAllBrands from "../functions/brand/getAllBrands"
import CreateCar from "../functions/car/createCar"
import { useParams } from "react-router-dom";
import getCarById from "../functions/car/getCarById";
import updateCar from "../functions/car/updateCar";

export default function EditCar(){
    const [brands, setBrands] = useState([])
    const { id } = useParams(); 
    const [car, setCar] = useState({
      id: "",
      brand: "",
      model: "",
      year: "",
      color: "",
      brandName: ""
    })
  
    useEffect(() => {
      const initializeAsync = async () => {
        let brandList = await GetAllBrands();
        setBrands(brandList);

        let carData = await getCarById(id)
        if (carData) {
        setCar({
          id: id,
          brand: carData.brandId.toString(),
          model: carData.model,
          year: carData.year,
          color: carData.color,
          brandName: carData.brandName
        })
      }
      }
  
      initializeAsync();
    }, [])
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCar({
        ...car,
        [name]: value
      });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateCar(car)
  
    }
  
    return (
      <div className="container mt-5">
        <h2>Editar Carro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="brand">Marca</label>
            <select 
              name="brand" 
              className="form-control" 
              value={car.brand} 
              onChange={handleChange}
              required>
              <option value="">Selecione uma marca</option>
              {brands.map((data) => (
                <option key={data.id} value={String(data.id)}>{data.name}</option>
              ))}
            </select>
            
            <label htmlFor="model">Modelo</label>
            <input
              type="text"
              className="form-control"
              id="model"
              name="model"
              placeholder="Digite o modelo do carro"
              value={car.model}
              onChange={handleChange}
              required
            />
  
            <label htmlFor="year">Ano</label>
            <input
              type="number"
              className="form-control"
              id="year"
              name="year"
              placeholder="Digite o ano do carro"
              value={car.year}
              onChange={handleChange}
              required
            />
  
            <label htmlFor="color">Cor</label>
            <input
              type="text"
              className="form-control"
              id="color"
              name="color"
              placeholder="Digite a cor do carro"
              value={car.color}
              onChange={handleChange}
              required
            />
  
           
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Editar Carro
          </button>
        </form>
      </div>
    )
}