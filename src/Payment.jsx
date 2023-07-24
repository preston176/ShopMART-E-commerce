
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';

const Payment = () => {
    const[{ basket, user }, dispatch] = useStateValue();

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
         </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
