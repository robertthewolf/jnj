import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import logo from '../img/logo.svg';
import Typography from 'typography';
import './all.sass';

import HorizontalScroll from 'react-scroll-horizontal';
import MediaQuery from 'react-responsive';

import Navbar from '../components/Navbar';



class TemplateWrapper extends React.Component {


  componentDidMount() {
  }

  render() {
    
    const language = typeof window !== 'undefined'? navigator.userLanguage || navigator.language : 'cs-CZ';

    return (
      <div>

        <Helmet htmlAttributes={{"lang": language}}>
          <title>JNJ Art Group</title>
        </Helmet>

        <MediaQuery maxDeviceWidth={768}>
          <div className="scrollWrapper">
            <Navbar></Navbar>
            {this.props.children()}
          </div>
        </MediaQuery>

        <MediaQuery minDeviceWidth={768}>
          <HorizontalScroll>
            <div className="scrollWrapper">
              <Navbar></Navbar>
              {this.props.children()}
            </div>
          </HorizontalScroll>
        </MediaQuery>

      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
