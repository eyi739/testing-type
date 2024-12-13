import { useState } from "react" 

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState(["😂"])
    const changeEmoji = () => {
        setEmojis((oldEmojis) => 
            [...oldEmojis, "😒"]
        )
    }
    return (
        <div>
            {emojis.map((e) => (
                <span style={{fontSize: "4rem"}}>{e}</span>
            ))}
            <button onClick={changeEmoji}>Add Emoji</button>
        </div>
    )
}