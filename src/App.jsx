import Cart from "./pages/islom/Cart"
import Category from "./pages/islom/Category";
import Home from './pages/Home'
import { Route, Routes, Navigate } from "react-router-dom";
import Fullproduct from "./components/Productdetailpage/NewProduct/Fullproduct";
import Shop from "./components/Productdetailpage/Shop/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div >
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullproduct" element={<Fullproduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App