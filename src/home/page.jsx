import axios from "axios"
import { useEffect, useState } from "react"
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import deleteBrand from "../functions/brand/deleteBrand";
import deleteCar from "../functions/car/deleteCar";

export default function Home(){

    const [brands, setBrands] = useState()
    const [cars, setCars] = useState()

    useEffect(() =>{
        const brandApiUrl = 'https://localhost:7295/api/brands'
        axios.get(brandApiUrl).then((response) =>{
            setBrands(response.data)
        })


        const carApiUrl = 'https://localhost:7295/api/cars'
        axios.get(carApiUrl).then((response) =>{
            setCars(response.data)
        })
    },[])


    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Gerenciamento de Marcas e Carros</h1>
        </div>
      </div>
      <div className="row my-4">
      
      </div>
      <div className="row">
        <div className="col">
          <h2>Marcas</h2>
          <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome da Marca</th>
                </tr>
              </thead>
              <tbody>
              {brands?.map(brand => (
                  <tr key={brand.id}>
                    <td className="col-4">{brand.id}</td>
                    <td className="col-4">{brand.name}</td>
                    <td className="col-2">
                        <a href={`/editbrand/${brand.id}`}>
                      <button
                        className="btn btn-warning btn-sm me-2"
                 
                      >
                        <PencilSquare /> Editar
                      </button>
                      </a>
                      <button
                      onClick={() => deleteBrand(brand.id)}
                        className="btn btn-danger btn-sm"
                      
                      >
                        <Trash /> Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
      <div className="row my-4">
        <div className="col">
          <h2>Carros</h2>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Marca</th>
                <th>Cor</th>
              </tr>
            </thead>
            <tbody>
            {cars?.map(car => (
                  <tr key={car.id}>
                    <td className="col-4">{car.id}</td>
                    <td className="col-1">{car.model}</td>
                    <td className="col-1">{car.year}</td>
                    <td className="col-1">{car.brandName}</td>
                    <td className="col-1">{car.color}</td>
                    <td className="col-2">
                      <a href={`/editCar/${car.id}`}>
                      <button
                        className="btn btn-warning btn-sm me-2"
                 
                      >
                        <PencilSquare /> Editar
                      </button>
                      </a>
                      <button
                      onClick={() => deleteCar(car.id)}
                        className="btn btn-danger btn-sm"
                      
                      >
                        <Trash /> Deletar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row my-4" id="brand-form">
        <div className="col gap-2">
            <a href="/brand">
            <button type="submit" className="btn btn-primary m-1">
                
              Cadastrar Marca
            </button>
            </a>
                <a href="/newcar">
            <button type="submit" className="btn btn-primary m-1 ">
              Cadastrar Carro
            </button>
            </a>
        </div>
      </div>
    </div>
    )
}