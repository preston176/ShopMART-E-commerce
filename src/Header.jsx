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
            <div className="header__option"></div>
            <div className="header__option"></div>
            <div className="header__option"></div>
        </div>
    </div>
  )
}

export default Header
