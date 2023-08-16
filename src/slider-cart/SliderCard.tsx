import React from 'react'
interface Props {
    imageSrc : string,
    description: string,
    bio: string,
}

const SliderCard = ( {imageSrc , description , bio} : Props) => {
  return (
    <div className="slider-card">
     <img src={imageSrc} alt="Logo" className="logo-image" />
     <div className="card-content">
      <p className="description">{description}</p>
      <p className="bio">{bio}</p>
     </div>
    </div>
  )
}

export default SliderCard