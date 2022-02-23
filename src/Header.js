import React from 'react';
import './Header.css';
import{Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import { db, auth } from "./firebase";


function Header() {
  const[{basket, user},dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img 
        className="header__logo" 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        />
      </Link>
      <div className='header__search'>
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">

        {/* 1st Link */}
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={handleAuthenticaton} className="header__option" >
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/orders" className='header__link'>  {/* href will refresh page, Link won't refresh */}
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className='header__link'>  {/* href will refresh page, Link won't refresh */}
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
             <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
        


      </div>

    </nav>
  )
}

export default Header