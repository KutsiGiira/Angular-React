import Explore from "./Explore";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Main(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Explore />}></Route>
                    <Route path="/explore" element={<Explore />} className="routes" activeClassName="active"></Route>
                    <Route path="/explore/:gameName" element={<Layout />} className="routes" activeClassName="active"></Route>
                    <Route path="/wishlist" element={<Wishlist />} className="routes" activeClassName="active"></Route>
                    <Route path="/cart" element={<Cart />} className="routes" activeClassName="active"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Main;