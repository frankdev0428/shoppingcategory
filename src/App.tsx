import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import './App.css'
function App() {
   
  return (
    <div className="app">
      <SliderComponent cardData={dataCard} />
    </div>
  )
}

export default App
