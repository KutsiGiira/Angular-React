import React, { useEffect, useState } from 'react';
import elden from '../Pictures/elden.jpg'
import plague from '../Pictures/plague.jpg'
import vampyr from '../Pictures/vampyr.jpg'
import sekiro from '../Pictures/sekiro.jpg'
import './Explore.css'
function Explore(){
    const Pics = [elden, plague, vampyr, sekiro];
    const [Image , SetImage] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          SetImage((prevIndex) => (prevIndex + 1) % Pics.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
    return(
        <div>
            <div className='News'>
                <div className='Big'>
                    <img src={Pics[Image]} width="1100" height="700"/>
                </div>
                    <div className='Side'>
                    <img src={Pics[0]} width="300"/>
                    <img src={Pics[1]} width="300" />
                    <img src={Pics[2]} width="300" />
                    <img src= {Pics[3]} width="300" /> 
                </div>
            </div>
        </div>
    )
}
export default Explore;