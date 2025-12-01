function Header({title}) {
    console.log(title)
    return <h1>Develop {title ? title : 'JavaScript'}. Preview. Ship. 🚀</h1>
}

export function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
    return (<div>
        <Header title="React"/>
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>)
}