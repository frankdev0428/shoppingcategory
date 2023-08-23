import {useState} from 'react'
import {AiFillLike ,AiFillDislike } from 'react-icons/ai'


const LikeCom = () => {
   const [status,setStatus] = useState(true);
   const toggle = () => {
    setStatus(!status);
   }
  return (
    <div>
      {status ? (<AiFillLike size={20} onClick={toggle}/>) :
      (<AiFillDislike onClick= {toggle} size={20}/>)
      }
    </div>
  )
}

export default LikeCom