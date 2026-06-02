import Cart from "./pages/islom/Cart"
import Category from "./pages/islom/Category";
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import Fullproduct from "./components/Productdetailpage/NewProduct/Fullproduct";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Routes>
           <Header />
          <Route path="/home" element={<Home />} />
           <Route path="/cart" element={<Cart/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/fullproduct" element={<Fullproduct/>} />
            <Footer />
        </Routes>
      
    </div>
  )
}

export default App