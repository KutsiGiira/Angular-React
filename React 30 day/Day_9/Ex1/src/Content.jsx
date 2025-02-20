import {useState } from 'react';
import './cont.css'
function Main({style, children}){
    return(
    <main style={{backgroundColor: style}}>
        {children}
    </main>
    )

}
function Content(){
    const [clr, setClr] = useState("pink");
    function ClrChanger(c){
            setClr(c);
    }
    const season = [
        {name:"summer", c:"yellow"},
        {name:"spring", c:"green"},
        {name:"winter", c:"grey"},
        {name:"autumn", c:"orange"}
    ]
    return(
        <Main style={clr}>
            {season.map((s, index) => (<button key={index} style={{backgroundColor: clr === s.c ? 's.c' : s.c}} onClick={() => ClrChanger(s.c)}>{s.name}</button>))}
        </Main>
    )
}
export default Content;