import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import Typography from 'typography';
import './all.sass';

const Navbar = () => (
  <nav>
      <Link to="/">
          <img src={logo} alt="JNJ Art Group" />
      </Link>
      <ul>
        <li>
          <Link activeClassName="active" to={`/m/`}>
            Zrcadlo
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/photography/`}>
            Fotka
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/jewellery/`}>
            Šperk
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/glass/`}>
            Sklo
          </Link>
        </li>
      </ul>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Home | Gatsby + Netlify CMS"
      htmlAttributes={{"lang": "en"}}
    />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
