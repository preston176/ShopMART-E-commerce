
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormattedNumber } from 'react-intl';
import { getBasketTotal } from './reducer';
import instance from './axios';
import axios from './axios';
import { db } from './firebase';
import { doc, collection, setDoc } from "firebase/firestore";

const Payment = () => {
    const navigate = useNavigate();
    const[{ basket, user }, dispatch] = useStateValue();

    

    const [suceeded, setSuceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
            //generate stripe secret used to charge a customer but whenever basket changes we need a new secret

        const getClientSecret = async () => {
            // pause and wait before continuing
        const response = await axios({
            method: 'post',
            // stripe expets total in subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])
        const stripe = useStripe();
        const elements = useElements();

        console.log("the secret is", clientSecret);
        console.log("😒😒",user.uid)
        const handleSubmit = async (event) => {
            // stripe function
            event.preventDefault();
            setProcessing(true);
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({paymentIntent}) => {
                //paymentIntent === payment confirmation
                const saveOrderToDatabase = async (userId, paymentIntent, basket) => {
                    try {
                      const orderRef = doc(collection(db, "users", userId, "orders"), paymentIntent.id);
                      await setDoc(orderRef, {
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                      });
                      console.log("Order saved successfully!");
                    } catch (error) {
                      console.error("Error saving order to database:", error);
                    }
                  };
         saveOrderToDatabase(user.uid, paymentIntent, basket); // call the function to populate firebase 

                setSuceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({
                    type: 'EMPTY_BASKET'
                })
                navigate('/orders');
            })
        }
        const handleChange = e => {
            // handle the changes
            setDisabled(false);
            setError(event.error ? event.error.message : "");
        }

  return (
    <div className='payment'>
      <div className="payment__container">
      <h1>Checkout (
        <Link to="/checkout">{basket?.length} items </Link>
        )</h1>
        {/* delivery address */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>Nairobi, Kenya</p>
                <p>10010, Ke</p>
            </div>
        </div>
        {/* Review items shown here  */}
        <div className="payment__section">
        <div className="payment__title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment__item">
                {/* Products here */}
                {basket.map((item) => (
        <CheckoutProduct 
        key={crypto.randomUUID()}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}            
        />
      ))}
        </div>
        </div>
         {/* Payment method  */}
         <div className="payment__section">
         <div className="payment__title">
            <h3>Payment Method</h3>
         </div>
         <div className="payment__details">
            {/* Stripe payments */}

            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}  
                />
                <div className="payment__priceContainer">
                <FormattedNumber
            value={getBasketTotal(basket)}
            style="currency"
            currency="USD"
          />
          <button disabled={processing || disabled || suceeded}>
            <span>{processing ? <p>Processing</p> : 
            "Buy Now"
            }</span>
          </button>
            </div>

            {/* error msg */}
            {error && <div>{error}</div>}
            </form>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
