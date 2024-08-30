import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import {Search, ShoppingBag} from 'lucide-react'



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo"> <img src="../../assets/logo-regular.png" width={50}/></Link>
        </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link className="links" to="/shopAll">SHOP ALL</Link></li>
          <li><Link className="links" to="/decor">DECOR</Link></li>
          <li><Link className="links" to="/office">OFFICE</Link></li>
          <li><Link className="links" to="/livingRoom">LIVING ROOM</Link></li>
          <li><Link className="links" to="/bedroom">BEDROOM</Link></li>
          <li><Link className="links" to="/search"><Search size={10}/></Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link className="links" to="/story">STORY</Link></li>
          <li><Link className="links" to="/contact">CONTACT</Link></li>
          <li><Link className="links" to="/trackOrder">TRACK ORDER</Link></li>
          <li><Link className="links" to="/help">HELP</Link></li>
          <li><Link className="links" to="/logIn">Log In</Link></li>
          <li><Link className="links" to="/cartIcon"><ShoppingBag size={10} /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
