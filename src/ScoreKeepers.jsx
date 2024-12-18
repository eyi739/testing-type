import {useState} from "react"; 
// import Player from "./Player";

export default function ScoreKeepers({numPlayers=3, target=5}){
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    // function incrementScore(idx){
    //     setScores((oldScores) => {
    //         const copy = [...oldScores];
    //         copy[idx] += 1;
    //         return copy;
    //     })
    // }

    const incrementScore = (idx) => {
        setScores((oldScores) => {
            return oldScores.map((score, i) => {
                if(i === idx) return score + 1;
                return score;
            })
        })
    }
    
    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>ScoreKeeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return <li key={idx}>
                                Player{idx + 1}: {score}
                                <button onClick={() => incrementScore(idx)}>+1</button>
                                {score >= target && "Winner!"}
                            </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )


    // const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
    // function increaseP1Score(){
    //     setScores(oldScores => {
    //         return {...oldScores, p1Score: oldScores.p1Score + 1}
    //     });
    // }

    // function increaseP2Score(){
    //     setScores(oldScores => {
    //         return {...oldScores, p2Score: oldScores.p2Score + 1}
    //     });
    // }

    // return (
    //     <div className="">
    //         <p>Player 1: {scores.p1Score}</p>
    //         <p>Player 2: {scores.p2Score}</p>
    //         <button onClick={increaseP1Score}>+1 Player 1</button>
    //         <button onClick={increaseP2Score}>+1 Player 2</button>
    //     </div>
    // )
}