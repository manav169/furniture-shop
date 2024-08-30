import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo"> <img src="../../public/assets/logo-regular.png"/></Link>
        </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/shopAll">SHOP ALL</Link></li>
          <li><Link to="/decor">DECOR</Link></li>
          <li><Link to="/office">OFFICE</Link></li>
          <li><Link to="/livingRoom">LIVING ROOM</Link></li>
          <li><Link to="/bedroom">BEDROOM</Link></li>
          <li><Link to="/search">Search glass</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/story">STORY</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/trackOrder">TRACK ORDER</Link></li>
          <li><Link to="/help">HELP</Link></li>
          <li><Link to="/logIn">Log In</Link></li>
          <li><Link to="/cartIcon">Cart ICON</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
