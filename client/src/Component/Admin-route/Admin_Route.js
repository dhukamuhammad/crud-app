import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Blog_category from '../Blog-category/Blog_category'
import Blogs from '../Blogs/Blogs'
import Dashboard from '../Dashboard/Dashboard'
import Product_category from '../Product-category/Product_category'

const Admin_Route = () => {
  return (
    <div>
       <Routes> 
          <Route path='/' element={<Dashboard/>}/> 
          <Route path='/Product_category' element={<Product_category/>}/> 
          <Route path='/Blog_category' element={<Blog_category/>}/> 
          <Route path='/Blogs' element={<Blogs/>}/> 

       </Routes>
    </div>
  )
}

export default Admin_Route
