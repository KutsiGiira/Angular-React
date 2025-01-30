// import ListGroup from "./components/ListGroup";
// function App(){
//     let ListOf = ["Item 1", "Item 2", "Item 3"];
//     return <div><ListGroup items={ListOf} title="List of Items" /></div>
// }
// import Alert from "./components/Alert";
// function App(){
//     return (
//         <div>
//     <Alert>
//         Danger <span>Here</span>
//     </Alert>
//     </div>
//     );
// }

import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App(){
    const [Vis, setVis] = useState(false);
    return (
        <div> 
            <Alert></Alert>
        {/* <Button onClick={() => setVis(true)}></Button> */}
        </div>
    );
}
export default App;