import React, { useState, useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [tag, setTag] = useState('dogs');
    const [gif, setGif] = useState('');
    //2010 -->> difficulty 
    // 1 
        // 2 
            //3 
    
    //2020 --> promises -->resolve 
    // 1 
    // .then 
    //.catch  

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=fb6I0QDTZ5wQCEGrSqz8hjRvOsdPFfJ6&tag=${tag}`;

        const { data } = await axios.get(url);  //promise
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    //COMPONENT DID MOUNT ... 1st render
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    const handleClick = () => {
        fetchGif(tag);
    }

    return(
        <div className="container">
            <h1>Random {tag} gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    );
}

export default Random;