import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);

  //error
  const [error, setError] = useState(false);


  const signIn = (e) => {
    e.preventDefault();
    // Use firebase login here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // On successful login
        console.log(userCredential.user);
        navigate('/'); // Navigate to the desired route on successful login
      })
      .catch((error) => {
        alert(error.message)
        setError(true)
      });
  };
  const register = (e) => {
    e.preventDefault()
    // firebase registration happens here
    createUserWithEmailAndPassword(auth, email, password) // Use the imported method here
      .then((userCredential) => {
        // On success creation
        console.log(userCredential.user);
        if (auth) {
          navigate('/'); //force redirect
        }
      })
      .catch((error) => { alert(error.message) }
      );
  }

  return (
    <div className="login">

      {/* Conditionally render the Log-in link */}
      {!user ? (
        <Link to="/login">
          <img className="login__logo" src="/images/banner.jpg" alt="login-page" />
        </Link>
      ) : (
        <Link to="/">
          <img className="login__logo" src="/images/banner.jpg" alt="login-page" />
        </Link>
      )}

      <div className="login__container">
        <h1>Log-in</h1>
        {error && <div className="text-red-700 font-bold">Wrong credientials!, Register if you do not have an account</div>}
        <form action="">
          <h5>E-mail</h5>
          <input type="text" className='border-2' value={email}
            onChange={e => { setEmail(e.target.value) }}
          />
          <h5>Password</h5>
          <input type="password" className='border-2' value={password} onChange={e => { setPassword(e.target.value) }} />

          <button
            onClick={signIn}
            type='submit'
            className='login__signInButton btn btn-warning'>Log In</button>
        </form>
        <p>
          By logging-in you agree to our T&C of use 7 Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>
        <button onClick={register}
          className='login__registerButton btn btn-primary'>Create your account</button>
      </div>
    </div>
  )
}

export default Login
