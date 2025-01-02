import "./Box.css"
import {useState} from "react";

function Box({isActive}){
    return (
    <div 
        className="Box" style={{backgroundColor: isActive ? "red" : "black"}}>
    </div>
    )
}

export default Box;