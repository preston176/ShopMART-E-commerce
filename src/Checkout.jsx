import Subtotal from './Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="..." alt="checkout__ad" />
        <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout__title">
            Your shopping Basket
        </h2>

        {basket.map(item => (
          <CheckoutProduct 
          key={crypto.randomUUID()}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}

        
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout__right">
      <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
