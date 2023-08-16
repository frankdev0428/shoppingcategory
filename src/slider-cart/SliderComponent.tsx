
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from './SliderCard';

interface Props {
    cardData : string;
}

const SliderComponent = ( {cardData} : Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
    return (
        <Slider {...settings}>
            {cardData.map((card,index) => (
                <SliderCard key={index}
                imageSrc= {card.imageSrc}
                description={card.description}
                bio= {card.bio}
                />
            ))}
        </Slider>
    )
    
  
}

export default SliderComponent