import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { toast } from 'react-toastify';

const CheckoutProduct = ({id, image, title, price, rating, hideButton }) => {

    const [{ basket }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
      //
      const toastWarn = () => toast.warn('Removed from Cart');
        // to remove item from basket
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
            toastWarn()
    }


  return (
    <div className="checkoutProduct">
      <img className='checkoutProduct__image' src={image} alt="product-image" />


    <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutPrice__rating">
        {Array(rating).fill().map((_, i) => (
          <p key={crypto.randomUUID()}>⭐</p>
        ))}
        </div>
        {/* only render button if it is not hidden */}
        {!hideButton && (
          <button onClick={removeFromBasket} className='remove__btn'>Remove from Cart</button>
        )}
       
    </div>
    </div>
  )
}

export default CheckoutProduct
