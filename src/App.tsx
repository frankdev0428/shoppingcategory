import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import styles from '../src/App.module.css'
import DataModify from "./modify/DataModify";

function App() {
   
  return (
    <div className={styles.app}>
      <div className="dataModify">
        <DataModify />
      </div>
      <h1 className= {styles.title} 
      >This is Slider Collection</h1>
      <SliderComponent cardData={dataCard} />
    </div>
  )
}

export default App
