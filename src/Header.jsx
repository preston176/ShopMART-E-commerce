import './Header.css'
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className="header">
      <img className='header--logo' src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg" alt="store-logo" />

      <div className="header__search">

        <input className='header__searchInput' type="text" />
        <SearchIcon />
      </div>

        <div className="header__nav">
            <div className="header__option">
                <span className='header__optionLine1'>
                    Hello User
                </span>
                <span className='header__optionLine2'>
                    Log in
                </span>
            </div>
            <div className="header__option">
            <span className='header__optionLine1'>
                    Requset returns
                </span>
                <span className='header__optionLine2'>
                    & Orders
                </span>
            </div>
            <div className="header__option">
            <span className='header__optionLine1'>
                    Your
                </span>
                <span className='header__optionLine2'>
                    Pro Subscription
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header
