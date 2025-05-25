import { useEffect, useState } from "react";
import data from './Countries'
import './index.css'
function Body(){
    const [Rand, SetRand] = useState({});
    const getRand = () =>{
        const cArr = data.countries;
        if (Array.isArray(cArr) && cArr.length > 0) {
        const RandObj = cArr[Math.floor(Math.random()* cArr.length)];
        SetRand(RandObj);
    }
    };
    useEffect(() => {
        getRand(data);
    }, [])
    return(
        <main id='parent'>
            <div className="parent">
            <div className="cont">
                <p>Name: <span className="ans">{Rand.name}</span></p>
                <p>Capital: <span className="ans">{Rand.capital}</span ></p>
                <p>Spoken languages: <span  className="ans">{Rand.languages}</span ></p>
                <p>Population: <span  className="ans">{Rand.population}</span ></p>
                <p>Currency: <span  className="ans">{Rand.currency}</span ></p>                                
            </div>
            <button onClick={getRand}>Select Country</button>
            </div>
        </main>
    )
}
export default Body;