import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./subtotal.css";
import { FormattedNumber } from "react-intl";


const Subtotal = () => {
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
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
