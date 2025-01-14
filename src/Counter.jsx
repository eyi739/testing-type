// import {useState} from "react";

// export default function Counter(){
//     const [num, setNum] = useState(5);
//     const changeNum = () => {
//         setNum(num+1);
//     }
//     return(
//         <div>
//             <p>The count is: {num}</p>
//             <button onClick={changeNum}>Increment</button>
//         </div>
//     )
// }

import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(function myEffect() {
        console.log("MY EFFECT WAS CALLED")
    });
    const increment = () => {
        setCount((c) => c+1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    )
}