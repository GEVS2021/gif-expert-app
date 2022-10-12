import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

const GifGrid = (props) => {

    const [ images, isLoading ] = useFetchGifs(props.category);

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