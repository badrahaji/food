import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../../redux/authSlice'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }


  // const handleLogout = () => {
  //   dispatch(logout())
  //   navigate('/login')
  // }

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            Starv-H
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
          <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">About Us</a>
            </li>
            {/* <li className={classes.listItem}>
              <a href="#foods">Restaurants</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">Patesseries</a>
            </li>
            <li className={classes.listItem}>
              <Link to='/create'>Supperette</Link>
            </li> */}
            <li>
    <select name="dog-names" id="dog-names" className={classes.servicesDrop}> 
        <option value="rigatoni">Nos services</option> 
        <option value="dave">Restaurants</option> 
        <option value="pumpernickel">Patesseries</option> 
        <option value="reeses">Superette</option> 
    </select>
   </li>
          </ul>
          
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
         
          {/* <button onClick={handleLogout} className={classes.logout}>Logout</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar