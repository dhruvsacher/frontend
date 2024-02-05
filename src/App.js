import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop'
import Shopcategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Loginsignup from './Pages/Loginsignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from "./Components/Assets/banner_kids.png"
import Login from './Pages/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Mens' element={<Shopcategory banner={men_banner} category='men' />} />
          <Route path='/Women' element={<Shopcategory banner={women_banner} category='women' />} />
          <Route path='/Kids' element={<Shopcategory banner={kid_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Loginsignup />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
