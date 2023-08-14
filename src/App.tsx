import Navbar from './formComponent/Navbar'
import './App.css'
import { useState } from "react"
import Form from './formComponent/form';
import ExpenseList  from './formComponent/ExpenseList';
import ExpenseFilter from './formComponent/ExpenseFilter';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses ] = useState([
    { id: 1, description: 'aaa', amount: 10,category: 'Utilities'},
    { id: 2, description: 'bbb', amount: 10,category: 'Utilities'},
   ])
  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory ) : expenses;
  return (
    <>
     <Navbar />
     <div>
     <Form onSubmit= {expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
     </div>
     <div>
      <ExpenseFilter onSelectCategory = { (category) => setSelectedCategory(category)}/>
     </div>
     <div>
     <ExpenseList expenses= {visibleExpenses} onDelete= {(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
     </div>
    </>
  )
}

export default App
