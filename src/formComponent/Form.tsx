import { useForm , FieldValues  } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
    itemName: z.string().min(3, {message: 'The item name require minimum 3 character'}),
    itemPrice : z.number({invalid_type_error : 'Price must be enter'}).min(1).max(10000)
})
  type FormData = z.infer<typeof schema>;
 
    const Form = () => {
    const { register,handleSubmit, formState: { errors } } = useForm<FormData>({ resolver : zodResolver(schema)});
 
  const onSubmit = (data : FieldValues) => console.log(data);

  return (
    <div className ='formContainer'>
     <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="itemName" className="form-label">Items name</label>
            <input {...register('itemName')} id='itemName' type="text" className="form-control" />
            { errors.itemName && <p className = 'text-danger'>{errors.itemName.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="itemPrice" className="form-label">Price</label>
          <input {...register('itemPrice')} id='itemPrice' type="number" className="form-control" />
          { errors.itemPrice  && <p className = 'text-danger' >{errors.itemPrice.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select className="form-select" id="category" name="">
           <option value=''></option>
           
          </select>
        </div>
        <button className="btn btn-primary">Add Items</button>
     </form>
    </div>
  )
}

export default Form