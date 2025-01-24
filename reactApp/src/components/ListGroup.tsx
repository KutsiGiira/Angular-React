import {useState} from "react"

interface ListProp {items : string[], title : string}
function ListGroup({items, title} : ListProp) {

const [touched, setTouched] = useState(0);
  return (
    <>
        <h1>{title}</h1>
        {items.length === 0 && <h1>No Items</h1>}
        <ul className="list-group">
        {items.map((e, index) => (<li key={index} className={touched === index ? "list-group-item active" : "list-group-item"} onClick={() =>{setTouched(index); }}>{e}</li>))}

        </ul>
    </>
    );
}
export default ListGroup;
