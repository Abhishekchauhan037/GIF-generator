import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {  

  const{gif ,loading,fetchData} = useGif();

    function clickHandler(){

      fetchData();

    }
  return (
    <div className='w-1/2 text-center  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
      <h1 className='text-2xl underline uppercase font-bold'> A Random Gifs</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      
      <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]' onClick={clickHandler}>Generate</button>
    </div> 
  )
}

export default Random
