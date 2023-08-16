import React from 'react'
import { useState } from 'react'

const List = () => {
  const [input,setInput] = useState('')
  const [dataArray,setDataArray] = useState([])
const handleInput = (event) => {
    setInput(event.target.value)
}
const handleSubmit = () => {
    setDataArray([...dataArray,input]);
    setInput('')
}   
  return (
    <div >
     <div
      className="mb-3">
        <label htmlFor="city" className="form-label"></label>
        <input onChange = {handleInput} id="city" type="text" className="form-control" />
     </div>
     <button onClick={handleSubmit} className='btn btn-primary'>Add</button>
     <h1>List of City</h1>
     <ul>
       {dataArray.map(data => <li>{data}</li>)}
     </ul>
    </div>
  )
}

export default List;