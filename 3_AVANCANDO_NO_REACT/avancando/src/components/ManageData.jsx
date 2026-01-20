import { useState } from "react";

const ManageData = () => {
    // useState na prática:
    const [number, setNumber] = useState(10);
    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(15)}>Mudar variavel</button>
        </div>
    )
}

export default ManageData;