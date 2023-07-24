import './product.css'

const Product = ({ title, image, price, rating }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Intro to C++</p>
        <p className='product__price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product__rating'>
            <p>⭐</p>
        </div>
    
      </div>

        <img src='https://m.media-amazon.com/images/I/41YsUaW-0UL._SX331_BO1,204,203,200_.jpg' alt='' />
        <button>Add to Cart</button>
    </div>
  )
}

export default Product
