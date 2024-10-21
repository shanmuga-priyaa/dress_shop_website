 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens'element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Kids'element={<ShopCategory banner={kid_banner}  category="kid"/>}/>
        <Route path='/Product'element={<Product/>}/>
        <Route path=':ProductId'element={<Product/>}>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
