 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<ShopCategory category="mens"/>}/>
        <Route path='/womens'element={<ShopCategory category="womens"/>}/>
        <Route path='/ Kids'element={<ShopCategory category="Kids"/>}/>
        <Route path='/Product'element={<Product/>}/>
        <Route path=':ProductId'element={<Product/>}>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
