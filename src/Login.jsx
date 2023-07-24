import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
    <Link to='/'>
      <img className='login__logo' src="/images/banner.jpg" alt="login-page" />
      </Link>

      <div className="login__container">
        <h1>Log-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" />
                <h5>Password</h5>
                <input type="password" />

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
