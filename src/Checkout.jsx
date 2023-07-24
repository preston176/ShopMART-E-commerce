import './checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="..." alt="checkout__ad" />

        <div>
        <h2 className="checkout__title">
            Your shopping Basket
        </h2>
        {/* basket items */}
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout
