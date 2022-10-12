import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

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
            <div className="card-grid">
                {
                    images?.map(image => {
                        return (
                            <GifItem 
                                key={image.id}
                                {...image}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default GifGrid;