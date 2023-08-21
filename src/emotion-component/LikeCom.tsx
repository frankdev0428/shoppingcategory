import {useState} from 'react'
import {AiFillLike ,AiFillDislike } from 'react-icons/ai'
interface Props {
    onClick : () => void ;
}

const LikeCom = ( {onClick} : Props) => {
    const [status,setStatus] = useState(true)
    const toggle = () => {
        setStatus(!status);
        onClick()
    }
  return (
    <div>
    {status? (<AiFillLike color='#1877F2' size={20} onClick={toggle}/>): 
     ( <AiFillDislike color='#1877F2' size={20} onClick={toggle}/>)
    }
    </div>
  )
}

export default LikeCom