
function ListGroup() {
let ListOf = ["Item 1", "Item 2", "Item 3"];
let touched = 0;
  return (
    <>
        <h1>List</h1>
        {ListOf.length === 0 && <h1>No Items</h1>}
        <ul className="list-group">
        {ListOf.map((e, index) => (<li key={index} className={touched === index ? "list-group-item active" : "list-group-item"} onClick={() => touched = index;}>{e}</li>))}
        </ul>
    </>
    );
}
export default ListGroup;
