import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";


const App = () => {
    const [{}, dispatch] = useStateValue();

  useEffect(() => {

      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser)

        if (authUser)
        { // user logs in / was logged in
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        } else
        {// user logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])


  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
