import { useState } from "react";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "One Punch Man", "Dragon Ball" ]);

    const onAddCategory = () => {
        setCategories([...categories, 'One Piece']);
    }

    return (
        <>
            <h1> GifExpertApp </h1>

            <AddCategory 
                setCategories={setCategories}
            />

            <button onClick={onAddCategory} > Agregar </button>

            <ol>
                { 
                    categories.map((category, i) => {
                        return <li key={i}>{ category }</li>
                    })
                }
            </ol>
        </>
    )

}

export default GifExpertApp;