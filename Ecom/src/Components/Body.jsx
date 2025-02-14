 import Cart from "./Cart/Cart";
 import Wish from "./Wishlist/Wishlist";
 import Expolore from "./Explore/Explore";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 function Navbar(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Expolore />}/>
                    <Route path="/home" element={<Expolore />}/>
                    <Route path="/wishlist" element={<Wish />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Navbar;