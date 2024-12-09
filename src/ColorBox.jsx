import { useState } from "react";
import "./ColorBox.css"
export default function ColorBox({colors}){
    const [color, setColor] = useState("#40E0D0");
    const changeColor = () => {
        const idx = Math.floor(Math.random() * colors.length);
        const randColor = colors[idx];
        setColor(randColor);
    }
    return (
        <div onClick={changeColor} className="ColorBox" style={{backgroundColor: color}}>
        </div>
    )
}