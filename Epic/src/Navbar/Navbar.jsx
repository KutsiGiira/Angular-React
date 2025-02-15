import './nav.css'
function Navbar(){
    return(
        <div className='navbar'>
            <div className="LS">
            <a href="/explore">Explore</a><br></br>
            <input type="text" className="search" />
            </div>
            <div className="PN">
            <a href="/wishlist">wishlist</a><br></br>
            <a href="/cart">cart</a>
            </div>
        </div>
    )
}
export default Navbar;