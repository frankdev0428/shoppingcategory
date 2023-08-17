import React from 'react';
import styles from './SliderCard.module.css';

interface Props {
    imageSrc : string,
    description: string,
    bio: string,
}

const SliderCard = ( {imageSrc , description , bio} : Props) => {
  return (
    <div className={styles.sliderCard}>
      <img src={imageSrc} alt="Logo" className={styles.logoImage}/>
      <div className="card-content">
      <p className={styles.description}>{description}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
    </div>
    
  )
}

export default SliderCard