import './product.css'
import {useStateValue } from "./StateProvider"

const Product = ({ title, image, price, rating, id }) => {
const [{basket}, dispatch] = useStateValue();

// check basket if working
// console.log(basket)

const addToBasket = () => {
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
        <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product
