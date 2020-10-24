import React, { useState, useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=fb6I0QDTZ5wQCEGrSqz8hjRvOsdPFfJ6`;

const useGIF = (tag) => {
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);  //promise
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    //COMPONENT DID MOUNT ... 1st render
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);


    return { gif, fetchGif };
}

export default useGIF;