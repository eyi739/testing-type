import { useState } from "react" 
import {v4 as uuid} from "uuid";

function randEmoji(){
    const choices = ["😒","😢","😶‍🌫️"];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randEmoji()}])
    const changeEmoji = () => {
        setEmojis((oldEmojis) => 
            [...oldEmojis, {id: uuid(), emoji: randEmoji()}]
        )
    }

    const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randEmoji()}])
    }

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))}
            <button onClick={changeEmoji}>Add Emoji</button>
        </div>
    )
}