import { ReactNode } from "react";

interface PropAlert{
    children : ReactNode;
}

function Alert({children} : PropAlert){
  return (
    <div className="alert alert-danger">{children}</div>
  )
}
export default Alert;