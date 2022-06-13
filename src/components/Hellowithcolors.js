import React from 'react'
import { useParams } from "react-router";

const Hellowithcolors = () => {
    const {word,color, bgColor } = useParams();
  return (
    <div >
   {isNaN(word) ? <h1 style={{ backgroundColor: bgColor, color: color }}>The Word is {word} </h1>: <h1>The Number is:{word}</h1>}
</div>
  )
}

export default Hellowithcolors