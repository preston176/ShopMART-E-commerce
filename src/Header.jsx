import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


const Header = () => {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
        <Link to='/'>
        <img
        className="header__logo"
        src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg"
        alt="store-logo"
      />
        </Link>
      
  
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"
        />
      </div>

      <div className="header__nav">
      <Link to='/login'>
        <div className="header__option">
          <span className="header__optionLine1">Hello User</span>
          <span className="header__optionLine2">Log in</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLine1">Requset returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Pro Subscription</span>
        </div>
        <Link to='/checkout'>
        <div className="header__optionBasket">
            <AddShoppingCartIcon />

            <span className="header__optionLine2 header__basketCount">
              {basket?.length}
            </span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
