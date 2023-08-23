import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import styles from '../src/App.module.css'
import DataModify from "./modify/DataModify";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import axios, { CanceledError } from 'axios';
import { useEffect , useState } from 'react';
import LikeCom from "./emotion-component/LikeCom";
interface User {
  id: number;
  name: string;
}

function App() {
  const [users,setUsers] = useState<User[]>([]) ;
  const [error,setError] = useState('');
  const [isLoading , setLoading] = useState(false);
  useEffect( () => {
    const controller = new AbortController();
    setLoading(true) ;

    axios
     .get<User[]>('https://jsonplaceholder.typicode.com/users',{ signal: controller.signal })
     .then(res => {
      setUsers(res.data);
      setLoading(false);
    })
     .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    })
   
    return () => controller.abort();
  }, [])
   const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id))
    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    })
   }
  const addUser = () => {
    const newUser = {id: 0,name: 'Hoang'};
    setUsers([newUser,...users]);
    axios.post('https://jsonplaceholder.typicode.com/users',newUser)
    .then(res => setUsers([res.data,...users]))
  }
  return (
    <div className={styles.app}>
      <Navbar />
      <div className="User">
       { isLoading && <div className="spinner-border"></div>}
        <p className="text-danger">{error}</p>
        <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
        <ul className="list-group">
        {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>
         {user.name} 
        <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
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
