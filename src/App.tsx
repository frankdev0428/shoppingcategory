import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import styles from '../src/App.module.css'
import DataModify from "./modify/DataModify";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import axios from 'axios';
import { useEffect , useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users,setUsers] = useState<User[]>([]) ;
  const [error,setError] = useState('');
  
  useEffect(() => {
    axios
    .get<User[]>('https://jsonplaceholder.typicode.com/xusers')
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message));
  }, [])

  return (
    <div className={styles.app}>
      <Navbar />
      <div className="User">
        <p className="text-danger">{error}</p>
        <ul>
        {users.map(user => <li key={user.id}>
         {user.name} 
        </li>)}
        </ul>
      </div>
      <DataModify />
      <SliderComponent cardData={dataCard} />
      <Footer />
    </div>
  )
}

export default App
