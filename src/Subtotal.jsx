import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./subtotal.css";
import { FormattedNumber } from "react-intl";
import {  useNavigate } from 'react-router-dom';


const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

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
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
