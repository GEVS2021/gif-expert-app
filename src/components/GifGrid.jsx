import { getGifs } from "../helpers/getGifs";

const GifGrid = (props) => {

    getGifs(props.category);

    return (
        <h4>{props.category}</h4>
    )
}

export default GifGrid;