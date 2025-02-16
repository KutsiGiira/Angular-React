import './nav.css'
import { useState } from 'react';
function Navbar(){ 
    const games = [
        { name: "Vampyr", price: "$59.99" }
    ];
    
    const [name, setName] = useState("");
    console.log(name)
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
            <div className="filtered-games">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game, index) => (
                        <div key={index} className="game-item">
                            <span>{game.name}</span> - <span>{game.price}</span>
                        </div>
                    ))
                ) : (
                    <p>No games found</p>
                )}
            </div>
        </div>
    )
}
export default Navbar;