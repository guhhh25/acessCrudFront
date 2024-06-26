import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/page';
import Brand from './brand/page';
import EditBrand from './brand/editBrand';
import NewCar from './car/newCar';
import EditCar from './car/editCar';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path='/home' element={<Home />} />
        <Route index path='/brand' element={<Brand />} />
        <Route index path={`/editbrand/:id`} element={<EditBrand />} />
        <Route index path={`/newcar`} element={<NewCar />} />
        <Route index path={`/editCar/:id`} element={<EditCar />} />
        </Routes>
  
  </BrowserRouter>
  );
}

export default App;
