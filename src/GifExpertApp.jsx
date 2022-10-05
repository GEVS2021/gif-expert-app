import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


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

            { 
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )

}

export default GifExpertApp;