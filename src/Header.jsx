import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'


const Header = ({ searchQuery, setSearchQuery }) => {
  const handleAuthentication = () => {
    if (user)
    {
        auth.signOut();
    }
  }

  const [{basket, user}, dispatch] = useStateValue();

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
        <input className="header__searchInput" type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
        <SearchIcon className="header__searchIcon"
        />
      </div>

      <div className="header__nav">
      <Link to='/login'>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLine1">Hello {
            !user ? 'Guest' : `${user.email}`
          }</span>
          <span className="header__optionLine2">  {
            user ? "Sign Out" : "Sign In"}</span>
        </div>
        </Link>
        <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLine1">View your</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        </Link>
        <Link to="/about">
        <div className="header__option">
          <span className="header__optionLine1">About</span>
          <span className="header__optionLine2">Us</span>
        </div>
        </Link>
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
