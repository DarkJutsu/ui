import {useState} from "react";

function Header({title}) {
    console.log(title)
    return <h1>Develop {title ? title : 'JavaScript'}. Preview. Ship. 🚀</h1>
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (<div>
        <Header title="React"/>
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
    </div>)
}