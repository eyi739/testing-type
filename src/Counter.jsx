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
    const [name, setName] = useState("");
    useEffect(function myEffect() {
        console.log("MY EFFECT WAS CALLED");
    },
    [count]
);

    const increment = () => {
        setCount((c) => c+1)
    };

    const handleChange = (e) => {
        setName(e.target.value)
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input value={name} onChange={handleChange} type="text" />
        </div>
    )
}