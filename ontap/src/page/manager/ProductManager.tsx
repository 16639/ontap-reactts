import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from '../../type/ProductType'

type Props = {
    product: ProductType[],
    onRemove: (id: number) => void
}

const ProductManager = ({product, onRemove}: Props) => {
  return (
    <div>
        <div>
            <NavLink to={"/admin/add"}>Them san pham</NavLink>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Update</th>
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
            {product?.map((item, index) => 
                <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td><img src={`${item.img}`} alt="" width={"60px"} /></td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><NavLink to={`/admin/${item.id}/edit`} >Update</NavLink></td>
                    <td><button onClick={() => onRemove(item.id)}>Remove</button></td>
                </tr>
            )}
            </tbody>
            </table>
    </div>
  )
}

export default ProductManager