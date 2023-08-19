import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import styles from '../src/App.module.css'
import DataModify from "./modify/DataModify";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
   
  return (
    <div className={styles.app}>
      <Navbar />
      <DataModify />
      <SliderComponent cardData={dataCard} />
      <Footer />
    </div>
  )
}

export default App
