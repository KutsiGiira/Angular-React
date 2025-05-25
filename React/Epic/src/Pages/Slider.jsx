import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import witcher from '../Pictures/witcher.jpg'
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
import zelda from '../Pictures/zelda.jpg'
import { useNavigate } from "react-router-dom";
import './Slide.css'

const ImgSlider = () => {
    const navigate = useNavigate();
      const cards = [
          { src:rrd,name: "Red Dead Redemption", price: "$59.99" },
          { src:witcher,name: "The Witcher 3", price: "$39.99" },
          { src:elden,name: "Elden Ring", price: "$39.99" },
          { src:ass,name: "Assassin's Creed", price: "$49.99" },
          { src:gow,name: "God of War", price: "$39.99" },
          { src:horizon,name: "Horizon Zero Dawn", price: "$29.99" },
          { src:gta,name: "Grand Thift Auto 5", price: "$39.99" },
          { src:farr,name: "Far Cry 5", price: "$29.99" },
          { src:cp,name: "Cyberpunk 2077", price: "$59.99" },
          { src:fallout,name: "Fallout 4", price: "$19.99" },
          { src:rs,name: "Resident Evil 7", price: "$59.99" },
          { src:ds,name: "Dark Souls 3", price: "$29.99" },
          { src:death,name: "Death Stranding", price: "$39.99" },
          { src:zelda,name: "The Legend of Zelda", price: "$59.99" },
          { src:metro,name: "Metro Exodus", price: "$49.99" },
          { src:monster,name: "Monster Hunter: World", price: "$39.99" },
          { src:final,name: "Final Fantasy VII Remake", price: "$59.99" },
          { src:control,name: "Control", price: "$39.99" },
          { src:last,name: "The Last of Us Part II", price: "$59.99" },
          { src:tsushima,name: "Ghost of Tsushima", price: "$59.99" }
      ];
    return (
        <div>
          <h2 style={{position:"relative", left:"10%"}}><span id="subtitle">Discover more</span></h2>
            <Slide slidesToScroll={2} slidesToShow={7} indicators={true} id="imghold">
              {cards.map((c, index) => (<div className="hov" ><img key={index} src={c.src} alt={c.name} width="240" height="400" onClick={() => navigate(`/explore/${c.name}`)} /><p>{c.name}</p><p>{c.price}</p></div>))}
            </Slide>
        </div>
    );
};

export default ImgSlider;