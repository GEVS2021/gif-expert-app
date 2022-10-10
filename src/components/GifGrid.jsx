import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = (props) => {

    useEffect(() => {
        getGifs(props.category);
    }, []);

    return (
        <h4>{props.category}</h4>
    )
}

export default GifGrid;