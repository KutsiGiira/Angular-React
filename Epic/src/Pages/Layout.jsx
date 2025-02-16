import React from "react";
import { useLocation } from "react-router-dom";
import vampyr from '../Pictures/vampyr.jpg'
import { useParams } from "react-router-dom";
const gameData = {
    "vampyr": { src: vampyr, price: "22" },
  };
function Layout(){
    const { gameName } = useParams();
    const game = gameData[gameName];
    if (!game) return <h2>Game Not Found</h2>;
    return (
      <div>
        <h1>{gameName}</h1>
        <h1>{game.price}</h1>
        <img src={game.src} alt={gameName} width="500" />
      </div>
    );
  }
export default Layout;