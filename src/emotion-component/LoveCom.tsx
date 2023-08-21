import { AiFillHeart , AiOutlineHeart  }  from 'react-icons/ai';
import { useState } from 'react';
interface Props {
  onClick: () => void
}

const LoveCom = ({ onClick } : Props) => {
    const [status,setStatus] = useState(true);
    const toggle = () => {
        setStatus(!status);
        onClick()
    }
  return (
    <div className='loveIcon'>
        { status ? (<AiOutlineHeart  color="#ff6b81" size={20} onClick={toggle} />) :
        ( <AiFillHeart color="#ff6b81" size={20} onClick={toggle}/>)}
    </div>
  )
}

export default LoveCom