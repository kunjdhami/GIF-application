import React, { useState, useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    
    //hook-by react
    const [gif, setGif] = useState('');
    //state??
    //function local memory 


    //sync 
    // function1 function2 function3 : line

    //async 
    //function1
    //function2
    //function3
    //speed

    // .then : success
    // .catch : failure 
    

    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=fb6I0QDTZ5wQCEGrSqz8hjRvOsdPFfJ6`;

        const { data } = await axios.get(url);  //promise
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    //hook-by react
    //COMPONENT DID MOUNT ... 1st render
    useEffect(() => {
        fetchGif();
    }, []);

    const handleClick = () => {
        fetchGif();
    }

    return(
        <div className="container">
            <h1>Random</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    );
}

export default Random;