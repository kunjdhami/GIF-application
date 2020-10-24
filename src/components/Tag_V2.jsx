import React, {useState} from 'react';
import useGIF from '../useGIF';

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGIF(tag);
    
    // const handleClick = () => fetchGif(tag);

    return(
        <div className="container">
            <h1>Random {tag} gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
} 

export default Tag;