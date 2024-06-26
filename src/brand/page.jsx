import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CreateBrand from '../functions/brand/createBrand';

export default function Brand(){

    const [brandName, setBrandName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateBrand(brandName)
    
   
    setBrandName(''); 
  };
    return(
        <div className="container mt-5">
      <h2>Cadastrar Nova Marca</h2>
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
          Cadastrar Marca
        </button>
      </form>
    </div>
    )
}