import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch Man"]);

    const onAddCategory = (value) => {
        if(categories.includes(value)) {
            console.log("El valor ya está registrado")
            return;
        }

        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1> GifExpertApp </h1>

            <AddCategory 
                onAddCategory={onAddCategory}
            />

            { 
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )

}

export default GifExpertApp;