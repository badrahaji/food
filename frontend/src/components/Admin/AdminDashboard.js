import React from 'react'
import Sidebar from '../Sidebar'
import { Route, Routes } from 'react-router'
import Dashboard from "./Dashboard"
import About from './About'
import Comment from './Comment'
import Analytics from './Analytics'
import Product from './Product'
import ProductList from './ProductList'
import './dashboard.css'
const AdminDashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/about" element={<About />} />
          <Route path="/dashboard/comment" element={<Comment/>} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/product" element={<Product />} />
          <Route path="/dashboard/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </div>
  )
}

export default AdminDashboard
