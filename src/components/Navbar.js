import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.svg';

export default class Navbar extends React.Component {
render() {
return(
  <nav >
      <Link to="/">
          <img src={logo} alt="JNJ Art Group" />
      </Link>
      <ul>
        <li>
          <Link activeClassName="active" to={`/architecture/`}>
            <span className="en">Architecture</span>
            <span className="cs">Architektura</span>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/fashion/`}>
            <span className="en">Fashion</span>
            <span className="cs">Fashion</span>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/street/`}>
            <span className="en">Street</span>
            <span className="cs">Street</span>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/product/`}>
            <span className="en">Product</span>
            <span className="cs">Produkt</span>
          </Link>
        </li>
      </ul>
  </nav>
);
}
}
