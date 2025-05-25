import './nav.css'
import { useState } from 'react';
function Navbar(){ 
    const games = [
        { name: "Vampyr", price: "$59.99" }
    ];
    
    const [name, setName] = useState("");
    const filteredGames = games.filter(game =>
        game.name.includes(name)
    );
    return(
        <div className='navbar'>
            <div className="LS">
            <a href="/explore">Explore</a>
            <input type="text" className="search"  value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="PN">
            <a href="/wishlist">wishlist</a>
            <a href="/cart">cart</a>
            </div>
        </div>
    )
}
export default Navbar;