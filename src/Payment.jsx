
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormattedNumber } from 'react-intl';
import { getBasketTotal } from './reducer';
import instance from './axios';
import { useHistory } from 'react-router-dom';
import axios from './axios';

const Payment = () => {
    const[{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    

    const [suceeded, setSuceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true)

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
                setSuceeded(true);
                setError(null);
                setProcessing(false);
                history.replace('/orders')
            })
        }
        const handleChange = e => {
            // handle the changes
            setDisabled(empty);
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
