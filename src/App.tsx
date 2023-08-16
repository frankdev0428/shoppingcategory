import SliderComponent from "./slider-cart/SliderComponent"
import img1 from './slider-cart/images-stock/img1.jpeg'

function App() {
   const cardData = [
    {
      imageSrc: { img1 },
      description: 'Description for Card 1',
      bio: 'Bio for Card 1',
    },
    {
      imageSrc: 'logo2.png',
      description: 'Description for Card 2',
      bio: 'Bio for Card 2',
    },
    {
     imageSrc: 'logo3.png',
      description: 'Description for Card 3',
      bio: 'Bio for Card 3',
    }
   ]
  return (
    <div className="app">
      <SliderComponent cardData={cardData} />
      
    </div>
  )
}

export default App
