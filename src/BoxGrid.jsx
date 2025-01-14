import Box from "./Box";
import { useState } from "react";

function BoxGrid(){
    const [boxes, setBoxes] = useState([false, false, false, false, false, false, false, false, false,]);
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false,])
    }

    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value;
                } else {
                    return value;
                }
            })
        })        
    }

    return (
        <div className="BoxGrid">
            {boxes.map((b, idx) => (
                <Box key={idx} toggle={() => toggleBox(idx)} isActive={b}/>
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default BoxGrid;