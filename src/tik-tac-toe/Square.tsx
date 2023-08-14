import React from 'react'
import  { useState } from 'react';


const Square = ({value, onSquareClick}) => {
    
  return (
    <div>
      <button className="square" onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Square