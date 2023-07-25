import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./subtotal.css";
import { FormattedNumber } from "react-intl";
import { Link, useNavigate } from 'react-router-dom';


const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket, user}, dispatch] = useStateValue();

  const subtotalValue = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong>
          <FormattedNumber
            value={subtotalValue}
            style="currency"
            currency="USD" // Replace with your desired currency code
          />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      {user ? (
        <button onClick={e => navigate('/payment')}> Proceed to Checkout</button>
      ) : (
        <Link to="/login"><p>Please sign in to proceed to checkout.</p></Link>
      )}
    </div>
  );
};

export default Subtotal;
