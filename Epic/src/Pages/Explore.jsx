import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ImgSlider from './Slider';
import { useNavigate } from "react-router-dom";
import elden from '../Pictures/elden.jpg'
import plague from '../Pictures/plague.jpg'
import vampyr from '../Pictures/vampyr.jpg'
import sekiro from '../Pictures/sekiro.jpg'
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
import './Explore.css'
function Explore(){
    const Pics = [
        { src: elden, name: "Elden Ring", genre: '"Souls-like", "Open World", "Dark Fantasy", "RPG"' },
        { src: sekiro, name: "Sekiro", genre: '"Souls-like", "Action", "Adventure", "Stealth"' },
        { src: vampyr, name: "vampyr", genre: '"RPG", "Vampire", "Dark Fantasy", "Narrative-Driven"' },
        { src: plague, name: "A Plague Tale", genre: '"Adventure", "Stealth", "Story-Driven", "Historical"' }
    
    ];
    const [Image , SetImage] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          SetImage((prevIndex) => (prevIndex + 1) % Pics.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
    const souls = [
        {name:"vampyr", price:"30"},
        {name:"Dark Souls 3", price:"30"},
        {name:"Elden Ring", price:"30"},
        {name:"Sifu", price:"30"},
        {name:"Sekiro", price:"30"}
    ]
    const rpg = [
        {name:"The Witcher 3", price:"30"},
        {name:"Cyberpunk 2077", price:"30"},
        {name:"Fallout 4", price:"30"},
        {name:"The Legend of Zelda", price:"30"},
        {name:"Starfield", price:"30"},
        {name:"Dragon Quest XI", price:"30"},
        {name:"Final Fantasy VII Remake", price:"30"}
    ]
    const action = [
        {name:"Red Dead Redemption", price:"30"},
        {name:"Assassin's Creed", price:"30"},
        {name:"God of War", price:"30"},
        {name:"Horizon Zero Dawn", price:"30"},
        {name:"Death Stranding", price:"30"},
        {name:"A Plague Tale", price:"30"},
        {name:"Far Cry 5", price:"30"}

    ]
    const navigate = useNavigate();
    return(
        <div id="main">
            <div className='News'>
                <div className='Big'>
                    <img src={Pics[Image].src} width="1200" height="700" onClick={() => navigate(`/explore/${Pics[Image].name}`)}/>
                    <div className="card">
                        <span id="title">{Pics[Image].name}</span><br></br>
                        <span id="cat"><span id="genre">Genre :</span>{Pics[Image].genre}</span>
                        <div className='btns'>
                            <button id="add" > + Add to Wishlist</button>
                            <button id='cart'>Add to cart</button>
                        </div>
                    </div>
                </div>
                    <div className='Side'>
                        {Pics.map((pic, index) => (
                        <img 
                            key={index} 
                            src={pic.src} 
                            width="300" 
                            onClick={() => {SetImage(index);}}
                        />
                    ))}
                </div>
            </div>
            <div className='more'>
                <span id='sub'>{"Best Of All The Time"}</span>
                <div className='cont'>
                    <div className='p'>
                        <h2>Best Action-Adventure</h2>
                        <ul className="ul">
                            {action.map((a, index) => (<li key={index} onClick={() => navigate(`/explore/${a.name}`)}  style={{ cursor: "pointer" }}>
                                {a.name}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className='pp'>
                    <h2>Best RPG</h2>
                    <ul className="ul">
                    {rpg.map((r, index) => (
          <li key={index} onClick={() => navigate(`/explore/${r.name}`)} style={{ cursor: "pointer" }}>
            {r.name}
          </li>
            ))}
                        </ul>
                    </div>
                    <div className='ppp'>
                    <h2>Best Soulslike</h2>
                    <ul className="ul">
                    {souls.map((s, index) => (
          <li key={index} onClick={() => navigate(`/explore/${s.name}`)} style={{ cursor: "pointer" }}>
            {s.name}
          </li>
        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore;