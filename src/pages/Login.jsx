import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, Toast } from "react-toastify"

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='container'>
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Email' onChange={(e) => setValues({...values, [e.target.name]:e.target.value})} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' placeholder='Password' />
        </div>
        <button type='submit'>Submit</button>
        <span>Don't have an account? <Link to='/register'>Register</Link></span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login