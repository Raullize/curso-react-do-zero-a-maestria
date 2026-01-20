import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const[name, setName] = useState("Raul")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            
            <h1>If ternário</h1>
            {name === "Raul" ? (
                <div>
                    <p>O nome é Raul!</p>
                </div>
            ) : (
                <div>Nome não encontrado!</div>
            )}
            <button onClick={() => {setName("Pedro")}}>Clica aqui!</button>
        </div>
    )
}

export default ConditionalRender