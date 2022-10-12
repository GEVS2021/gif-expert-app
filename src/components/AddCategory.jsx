import { useState } from "react";


export const AddCategory = (props) => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event?.target?.value || "");
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( value.trim().length <= 0 ) return;

        props.onAddCategory(value);
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