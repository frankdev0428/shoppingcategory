interface Props  {
    expenses: Expense[],
    onDelete: (id: number) => void;
}
interface Expense {
   id : number;
   description : string;
   amount : number ;
   category: string;
}

const ExpenseList = ( { expenses , onDelete  } : Props) => {
    if(expenses.length === 0 ) return null
  return (
    <div>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {expenses.map(expense => <tr key={expense.id}>
     <td>{expense.description}</td>
     <td>{expense.amount}</td>
     <td>{expense.category}</td>
     <td>
     <button onClick= {() => onDelete(expense.id)} className="btn btn-outline-danger">Delete</button>
    </td>
    </tr> )}
  </tbody>
  <tfoot>
    <tr>
     <td>Total</td>
     <td> ${expenses.reduce((acc,expense) => expense.amount + acc,0).toFixed(2)}</td>
     <td></td> 
    </tr>
  </tfoot>
</table>
    </div>
  )
}

export default ExpenseList