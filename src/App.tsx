import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import styles from '../src/App.module.css'
import DataModify from "./modify/DataModify";
import Navbar from './Navbar/Navbar'

function App() {
   
  return (
    <div className={styles.app}>
      <Navbar />
      <div className="dataModify">
        <DataModify />
      </div>
      <SliderComponent cardData={dataCard} />
    </div>
  )
}

export default App
