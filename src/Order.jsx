import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import { FormattedNumber } from 'react-intl';

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h2>Order ID: {order.id}</h2>
      <p>Order Date: {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={crypto.randomUUID()}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <h3 className='order__total'>Order Total: 
        <FormattedNumber
          value={order.data.amount / 100}
          style='currency'
          currency='USD'
        />
      </h3>
    </div>
  );
};

export default Order;
