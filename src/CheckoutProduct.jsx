import './CheckoutProduct.css'


const CheckoutProduct = ({id, image, title, price, rating }) => {
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
          <p key={id}>⭐</p>
        ))}
        </div>
        <button>Remove from Cart</button>
    </div>
    </div>
  )
}

export default CheckoutProduct
