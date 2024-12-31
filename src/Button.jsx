import "./Button.css"

function Button({clickFunc}){
    return <button className="Button" onClick={clickFunc}>Re-Roll</button>
}

export default Button;