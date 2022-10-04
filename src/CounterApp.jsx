import { useState } from "react";


const CounterApp = () => {

    // Crear un state
    const [categories, setCategories] = useState(["One Punch Man", "Dragon ball"]);


    return (
        <>
            {/* Titulo */}
            <h1> CounterApp </h1>

            {/* Input */}


            {/* Listado de Tarjetas */}
            <ol>
                {
                    categories.map((category, i) => {
                        return <li key={i}> {category} </li>
                    })
                }
            </ol>

        </>
    )

}

export default CounterApp;