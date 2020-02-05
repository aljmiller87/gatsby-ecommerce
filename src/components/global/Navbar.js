import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navClass = "collapse navbar-collapse";
  const links = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ];

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsNavOpen(prev => !prev)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={isNavOpen ? `${navClass} show` : `${navClass}`}>
        <ul className="navbar-nav mx-auto">
          {links.map(item => (
            <li key={item.id} className="nav-item">
              <Link to={item.path} className="nav-link text-capitalize">
                {item.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
