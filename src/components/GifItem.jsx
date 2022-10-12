import React from 'react'

export const GifItem = (props) => {
    console.log("props", props);

    return (
        <div className='card'>
            <img src={props.url} alt={props.title} />
        </div>
    )
}
