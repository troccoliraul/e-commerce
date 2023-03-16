
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';
import Home from './pages/Home'
import CartPage from './pages/CartPage';
import DetailPage from "./pages/DetailPage";
import Products from './pages/Products';
import Page404 from './pages/Page404';
import Footer from './components/Footer'
import Checkout from './components/Checkout';

export default function App() {
  return (<CartProvider>
  <BrowserRouter>
  <NavBar background={'transparent'} />
  <Routes>    
      <Route path="/cart" element={<CartPage />}/>
      <Route path="/detail/:id" element={<DetailPage/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:tipoProducto" element={<Products/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Page404/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
  </CartProvider>
  );
}
