import SliderComponent from "./slider-cart/SliderComponent" ;
import dataCard from "./slider-cart/data";
import styles from '../src/App.module.css'
import DataModify from "./modify/DataModify";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import { useEffect , useState } from 'react';
import LikeCom from "./emotion-component/LikeCom";
import apiClient , {CanceledError} from "./services/api-client";
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

    apiClient
     .get<User[]>('/users',{ signal: controller.signal })
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
    apiClient.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    })
   }
  const addUser = () => {
    const newUser = {id: 0,name: 'Hoang'};
    setUsers([newUser,...users]);
    apiClient.post('/users',newUser)
    .then(({data: savedUser}) => setUsers([savedUser,...users]))
  }

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = {...user, name: user.name  + '!'};
    setUsers(users.map( u => u.id === user.id ? updatedUser : u))

    apiClient.patch('/users/' + user.id, updatedUser)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });
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
        <div>
        <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update</button>
        <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
        </div>
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
