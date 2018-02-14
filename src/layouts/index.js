import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import logo from '../img/logo.svg';
import Typography from 'typography';
import './all.sass';

import HorizontalScroll from 'react-scroll-horizontal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Home | Gatsby + Netlify CMS"
      htmlAttributes={{"lang": "en"}}
    />
      <HorizontalScroll>
        <div className="scrollWrapper">
          <Navbar />
        {children()}
      </div>
      </HorizontalScroll>
          <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
