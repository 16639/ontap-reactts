import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../type/ProductType'

type Props = {
    onAddProduct: (product: ProductType) => void
}
type FormInput = {
    name: string,
    img: string,
    price: number,
    description: string,
}

const AddProduct = (props: Props) => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm<FormInput>()

    const onAdd: SubmitHandler<FormInput> = (dataFrom : any) => {
        props.onAddProduct(dataFrom);
        navigate("/admin");
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onAdd)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" {...register("name")} minLength={5} id="exampleInputEmail1" required aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
                <input type="text" className="form-control" {...register("img")} id="exampleInputEmail1" required aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                <input type="number" className="form-control" {...register("price")} id="exampleInputEmail1" required aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                <input type="text" className="form-control" {...register("description")} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default AddProduct