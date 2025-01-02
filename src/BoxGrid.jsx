import Box from "./Box";
import { useState } from "react";

function BoxGrid(){
    const [boxes, setBoxes] = useState([false, false, false, false, false, false, false, false, false,]);
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false,])
    }
    return (
        <div className="BoxGrid">
            {boxes.map((b) => (
                <Box isActive={b}/>
            ))}
            {/* <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
            <Box/> */}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default BoxGrid;