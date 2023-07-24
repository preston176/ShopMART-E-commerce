import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="login">
    <Link to='/'>
      <img className='login__logo' src="/images/banner.jpg" alt="login-page" />
      </Link>

      <div className="login__container">
        <h1>Log-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text"  value={email}
                    onChange={e => {setEmail(e.target.value)}}
                />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>

                <button className='login__signInButton'>Log In</button>
            </form>
            <p>
                By logging-in you agree to our T&C of use 7 Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
            </p>
            <button className='login__registerButton'>Create your account</button>
      </div>
    </div>
  )
}

export default Login
