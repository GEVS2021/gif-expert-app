import { useState } from "react";


const AddCategory = (props) => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event?.target?.value || "");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(value);

        if( value.trim().length <= 0 ) return;

        props.setCategories(categories => [...categories, value]);

        setValue("");
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={value}
                onChange={onChange}
            />
        </form>
    )
}

export default AddCategory;