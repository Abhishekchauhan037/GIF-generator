import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

const  url = `https://api.giphy.com/v1/gifs/random?api_key=8GsJbFhXCTgRStrKICrOL1VEeRQ3sQaE`;


const useGif = (tag) => {

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState('false');

  async function fetchData(tag){

    setLoading(true); 
   const {data} =  await axios.get( tag ? `${url}&tag=${tag}` : url);   
   const imageSource = data.data.images.downsized_large.url;
   setGif(imageSource);

   setLoading(false);
  }
  useEffect(()=>{

    fetchData();
     
  },[])

  return {gif,loading,fetchData};

}

export default useGif
