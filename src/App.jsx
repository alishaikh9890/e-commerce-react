import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductItem/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>)
}

export default App;
