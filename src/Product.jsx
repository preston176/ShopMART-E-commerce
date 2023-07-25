import { Button } from '@mui/material';
import './product.css'
import {useStateValue } from "./StateProvider"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ title, image, price, rating, id }) => {
const [{basket}, dispatch] = useStateValue();



// check basket if working
// console.log(basket)

const addToBasket = () => {
  // toast added
  const toastInfo = () => toast.info('Added to Cart successfully');

        // dispatch some action into the data i.e item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });
    toastInfo(); // Trigger the toast message

};

  return (
   
    <div className='product'> 
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
     {Array(rating).fill().map((_, i) => (
            <p
            key={i}
            >⭐</p>
            ))}
            
        </div>
    
      </div>

        <img src={image} alt='product-image' />
        <Button  onClick={addToBasket} variant='text'>Add to Cart</Button>
    </div>
  )
}

export default Product
