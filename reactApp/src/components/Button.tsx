interface txt{
    inj : string;
    color? : string;
}
export const Button = ({inj , color = "success"}: txt) => {
  return (
    <button className={'btn btn-' + color}>{inj}</button>
  )
}
export default Button