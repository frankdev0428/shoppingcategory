import { useForm , FieldValues  } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from './categories'
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const schema = z.object({
    description: z.string().min(3, {message: 'The item name require minimum 3 character'}),
    amount : z.number().min(0.01).max(100_000),
    category:  z.enum(categories, {
      errorMap: () => ({ message: 'Category is required .'})
    }),
})
  type FormData = z.infer<typeof schema>;
 
    const Form = ( {onSubmit} : Props) => {
    const { register,handleSubmit,reset, formState: { errors } } = useForm<FormData>({ resolver : zodResolver(schema)});
 

  return (
    <div className ='formContainer'>
     <form onSubmit={handleSubmit(data => {
      onSubmit(data);
      reset();
     })}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description')} id='description' type="text" className="form-control" />
            { errors.description && <p className = 'text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input {...register('amount', {valueAsNumber: true})} id='amount' type="text" className="form-control" pattern="[0-9]*[.,]?[0-9]*"  placeholder='$'/>
          { errors.amount  && <p className = 'text-danger' >{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select {...register('category')} className="form-select" id="category" name="category">
           <option value=''></option>
           {categories.map(category => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>
        <button className="btn btn-primary">Add Items</button>
     </form>
    </div>
  )
}

export default Form