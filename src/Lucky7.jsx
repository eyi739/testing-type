import { useState } from "react";
import {getRolls, sum} from "./utils";
import "./Lucky7.css";

function Lucky7(){
    const [dice, setDice] = useState(getRolls(2))
    const won = sum(dice) === 7; 
}

function roll() {
    setDice(getRolls(2))
}

return (
    <main className="Lucky7"></main>
)