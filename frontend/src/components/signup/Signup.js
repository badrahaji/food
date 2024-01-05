import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './signup.module.css'
import img from '../../assets/womaneating.jpg'
import { register } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios';
const Signup = () => {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState('user'); // Default role selected.

  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignup = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:5000/auth/register`, {
        nom,
        prenom,
        email,
        password
      }, {
        headers: {
          "Content-Type": 'application/json'
        }
      });
  
      const data = res.data;
      dispatch(register(data));
      navigate('/');
      
    } catch (error) {
      // With Axios, specific error details are in error.response
      // If you'd like to access and log the error response:
      if (error.response) {
        console.error("Error Response:", error.response.data);
      }
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }


  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img src={img} className={classes.leftImg} />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleSignup} className={classes.signUpForm}>
          <div className={classes.userrole}>
          <div>
        <label>
          <input
            type="radio"
            value="user"
            checked={role === 'user'}
            onChange={(e) => setRole(e.target.value)}
          />
          Regular User
        </label>
      </div>
          <div>
        <label>
          <input
            type="radio"
            value="admin"
            checked={role === 'admin'}
            onChange={(e) => setRole(e.target.value)}
          />
          Administrator
        </label>
      </div>
      </div>
            <input type="text" placeholder="type  name " onChange={(e) => setNom(e.target.value)}/>
            <input type="text" placeholder="type last name " onChange={(e) => setPrenom(e.target.value)}/>
            <input type="email" placeholder="Type email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Type password"  onChange={(e) => setPassword(e.target.value)}/>
            <button className={classes.submitBtn}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
          {
            error && (
              <div className={classes.errorMessage}>
                 Wrong credentials! Try different ones.
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signup