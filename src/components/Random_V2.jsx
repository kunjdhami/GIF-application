import React from 'react';
import useGIF from '../useGIF';

const Tag = () => {
    const {gif, fetchGif} = useGIF();
    
    // const handleClick = () => fetchGif(tag);

    return(
        <div className="container">
            <h1>Random gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
} 

export default Tag;