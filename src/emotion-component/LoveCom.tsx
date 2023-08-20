// LoveIcon.js
import React, { useState } from 'react';

const LoveIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <i
        className={`fa${isClicked ? 's' : 'r'} fa-heart`}
        onClick={handleClick}
        style={{ color: isClicked ? 'red' : 'black', cursor: 'pointer' }}
      ></i>
    </div>
  );
};

export default LoveIcon;
