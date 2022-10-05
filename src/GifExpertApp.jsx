import { useState } from "react";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "One Punch Man", "Dragon Ball" ]);

    const onAddCategory = (value) => {
        if(categories.includes(value)) {
            console.log("El valor ya está registrado")
            return;
        }

        setCategories([...categories, value]);
    }

    return (
        <>
            <h1> GifExpertApp </h1>

            <AddCategory 
                onAddCategory={onAddCategory}
            />

            <ol>
                { 
                    categories.map(category => {
                        return <li key={category}>{ category }</li>
                    })
                }
            </ol>
        </>
    )

}

export default GifExpertApp;