import { useEffect, useState } from "react"
import GetAllBrands from "../functions/brand/getAllBrands"
import CreateCar from "../functions/car/createCar"

export default function NewCar(){
  const [brands, setBrands] = useState([])
  const [car, setCar] = useState({
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
    CreateCar(car)

  }

  return (
    <div className="container mt-5">
      <h2>Cadastrar Novo Carro</h2>
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
              <option key={data.id} value={data.id}>{data.name}</option>
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
          Cadastrar Marca
        </button>
      </form>
    </div>
  )
}