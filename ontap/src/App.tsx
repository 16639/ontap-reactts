import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductType } from './type/ProductType'
import axios from 'axios'
import Home from './page/Home'
import ProductManager from './page/manager/ProductManager'
import AddProduct from './page/manager/AddProduct'
import EditProduct from './page/manager/EditProduct'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get("http://localhost:8000/products");
      setProducts(data);
    }
    getProduct()
  } ,[])

  const handleRemove = async (id : number) => {
    const alert = window.confirm("Ban co muon xoa san pham");
    if(alert){
      await axios.delete("http://localhost:8000/products/"+id);
      setProducts(products.filter(it => it.id !== id));
    }
  }

  const handleAdd = async (dataForm : any) => {
    alert("Them san pham thanh cong")
    const {data} = await axios.post("http://localhost:8000/products", dataForm);
    setProducts([...products, data]);
  }

  const handleEdit = async (dataForm : any) => {
    alert("Cap nhat san pham thanh cong")
    const {data} = await axios.put(`http://localhost:8000/products/${dataForm.id}`, dataForm);
    setProducts(products.map(it => it.id === data.id ? data : it))
  } 

  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home product = {products} />} />

        <Route path='admin' >
          <Route index element={<Navigate to={"product"} />} />
          <Route path='product' element={<ProductManager product = {products} onRemove = {handleRemove} />} />
          <Route path='add' element={<AddProduct onAddProduct = {handleAdd} />} />
          <Route path=':id/edit' element={<EditProduct onEditProduct = {handleEdit} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
