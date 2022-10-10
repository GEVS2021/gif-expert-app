import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = (props) => {

    const [images, setImages] = useState([]);

    const updateImages = async () => {
        const newImages = await getGifs(props.category);
        setImages(newImages);
    }

    useEffect(() => {
        updateImages();
    }, []);

    return (
        <>
            <h4>{props.category}</h4>
            <ol>
                {
                    images?.map(image => {
                        return <li key={image.id}> { image.title } </li>
                    })
                }
            </ol>
        </>
    )
}

export default GifGrid;