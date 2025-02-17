import React from "react";
import { useLocation } from "react-router-dom";
import elden from '../Pictures/elden.jpg'
import vampyr from '../Pictures/vampyr.jpg'
import sekiro from '../Pictures/sekiro.jpg'
import plague from '../Pictures/plague.jpg'
import rrd from '../Pictures/rdr.jpg'
import ass from '../Pictures/ass.jpg'
import control from '../Pictures/control.jpg'
import cp from '../Pictures/cp.jpg'
import death from '../Pictures/death.jpg'
import ds from '../Pictures/ds.jpg'
import fallout from '../Pictures/fallout.jpg'
import farr from '../Pictures/Farr.jpg'
import final from '../Pictures/final.png'
import gow from '../Pictures/gow.jpg'
import gta from '../Pictures/gta.png'
import horizon from '../Pictures/horizon.jpg'
import last from '../Pictures/last.jpg'
import metro from '../Pictures/metro.jpeg'
import monster from '../Pictures/monster.jpg'
import rs from '../Pictures/rs.jpg'
import tsushima from '../Pictures/tshuchima.jpg'
import witcher from '../Pictures/witcher.jpg'
import zelda from '../Pictures/zelda.jpg'
import { useParams } from "react-router-dom";
import './layout.css'
import Slider from "./Slider";
const gameData = {
    "vampyr": { 
        src: vampyr, 
        price: "22", 
        genre: "Action RPG, Horror, Story-Rich", 
        releaseDate: "June 5, 2018", 
        summary: "Set in 1918 London, Vampyr follows the journey of Dr. Jonathan Reid, a vampire doctor searching for a cure to the plague while battling his thirst for blood.",
        globalRating: "77*"
    },
    "dark souls": { 
        src: ds, 
        price: "30", 
        genre: "Action RPG, Souls-like, Difficult", 
        releaseDate: "September 22, 2011", 
        summary: "Dark Souls is known for its challenging combat, atmospheric storytelling, and unforgiving difficulty. Players venture through a dark, interconnected world battling enemies and bosses.",
        globalRating: "89*"
    },
    "elden": { 
        src: elden, 
        price: "30", 
        genre: "Open-World, Action RPG, Souls-like", 
        releaseDate: "February 25, 2022", 
        summary: "Elden Ring offers an open-world experience with immersive lore and challenging combat. Players explore the mystical Lands Between to uncover secrets and defeat formidable foes.",
        globalRating: "95*"
    },
    "Sekiro": { 
        src: sekiro, 
        price: "30", 
        genre: "Action, Adventure, Souls-like, Ninja", 
        releaseDate: "March 22, 2019", 
        summary: "Sekiro is an action-adventure game set in feudal Japan where players take control of a skilled shinobi, seeking revenge while mastering precision combat and stealth.",
        globalRating: "90*"
    },
    "The Witcher 3": { 
        src: witcher, 
        price: "30", 
        genre: "Open-World, Action RPG, Fantasy", 
        releaseDate: "May 19, 2015", 
        summary: "A rich, open-world RPG where players control Geralt of Rivia, a monster hunter in a vast, lore-filled world filled with quests, moral choices, and intense combat.",
        globalRating: "93*"
    },
    "Cyberpunk 2077": { 
        src: cp, 
        price: "30", 
        genre: "Open-World, RPG, Sci-Fi", 
        releaseDate: "December 10, 2020", 
        summary: "Set in a dystopian future, Cyberpunk 2077 allows players to navigate Night City, customize their character, and interact with a sprawling narrative filled with crime and tech.",
        globalRating: "79*"
    },
    "Fallout 4": { 
        src: fallout, 
        price: "30", 
        genre: "Open-World, RPG, Post-Apocalyptic", 
        releaseDate: "November 10, 2015", 
        summary: "Fallout 4 takes players to a post-apocalyptic world where they explore the wasteland, engage in tactical combat, and rebuild civilization while facing off against mutants.",
        globalRating: "84*"
    },
    "Assassin's Creed": { 
        src: ass, 
        price: "30", 
        genre: "Action, Open-World, Stealth", 
        releaseDate: "November 13, 2007", 
        summary: "In Assassin's Creed, players control a skilled assassin, navigating historical settings, blending in crowds, and using stealth to take down enemies in the pursuit of justice.",
        globalRating: "81*"
    },
    "God of War": { 
        src: gow, 
        price: "30", 
        genre: "Action, Adventure, Mythology", 
        releaseDate: "April 20, 2018", 
        summary: "God of War reimagines the mythological saga as Kratos, now a father, navigates Norse realms with his son Atreus while battling gods and monsters.",
        globalRating: "94*"
    },
    "Horizon Zero Dawn": { 
        src: horizon, 
        price: "30", 
        genre: "Open-World, Action, Sci-Fi", 
        releaseDate: "February 28, 2017", 
        summary: "Set in a post-apocalyptic world where mechanical creatures roam, Horizon Zero Dawn follows Aloy as she uncovers the mysteries of her origins and saves humanity.",
        globalRating: "89*"
    },
    "Red Dead Redemption": { 
        src: rrd, 
        price: "30", 
        genre: "Open-World, Western, Adventure", 
        releaseDate: "May 18, 2010", 
        summary: "In Red Dead Redemption, players take on the role of John Marston, a former outlaw,in a wild-west adventure where they battle foes, hunt animals, and explore a vast frontier.",
        globalRating: "95*"
    },
    "Final Fantasy VII Remake": { 
        src: final, 
        price: "30", 
        genre: "JRPG, Story-Rich, Fantasy", 
        releaseDate: "April 10, 2020", 
        summary: "A remake of the classic JRPG, Final Fantasy VII Remake reintroduces Cloud Strife and his companions in a reimagined world filled with turn-based combat, vivid storytelling, and breathtaking visuals.",
        globalRating: "87*"
    },
"A Plague Tale": { 
    src: plague, 
    price: "20", 
    genre: "Action-Adventure, Stealth, Story-Rich", 
    releaseDate: "October 18, 2019", 
    summary: "In A Plague Tale: Innocence, players control Amicia and her younger brother Hugo as they navigate a brutal, plague-infested medieval France while uncovering dark secrets.",
    globalRating: "84/100"
}
};
function Layout(){
    const { gameName } = useParams();
    const game = gameData[gameName];
    if (!game) return <h2>Game Not Found</h2>;
    return (
      <main>
      <div className="holder">
      <div className="g">
        <img src={game.src} alt={gameName} width="350" height="450"className="Lpic" />
      </div>
      <div className="body">
          <p className="info">
            <h1>{gameName}</h1>
            <h4>Released Date : {game.releaseDate}</h4>
            <h4>Price: {game.price} MAD</h4>
            <div id="summary"><h5 >{game.summary}</h5></div>
            <h4>Rate: {game.globalRating}</h4>
          </p>
          <p className="btts">
          <button id="add"> + Add to Wishlist</button>
          <button id='cart'>Add to cart</button>
          </p>
          <div>
          <h5 id="gh5">{game.genre}</h5>
          </div>
          </div>
      </div>
      <div className="Arr">
        <Slider />
      </div>
      </main>
    );
  }
export default Layout;