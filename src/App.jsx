import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect, useState } from "react";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51NUHNtEFBkCVrySQmEOwMeISenUaRwqZrIsZxeldYPXExHv6tf6Ai2QQ3GwJD42Aj9E4GETXRC3THsdFC1UeeWXV00gxtdBqY0')


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home  searchQuery={searchQuery}/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
