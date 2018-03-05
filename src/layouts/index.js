import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import logo from '../img/logo.svg';
import Typography from 'typography';
import './all.sass';

import HorizontalScroll from 'react-scroll-horizontal';
import MediaQuery from 'react-responsive';

import Navbar from '../components/Navbar';

//working on this!
import mediumZoom from 'medium-zoom'


class TemplateWrapper extends React.Component {

  state = ({
    isTouch: false
  })

  componentDidMount() {
    window.addEventListener('touchstart', function() {
      this.setState({
        isTouch: true
      })
    })

    
  }

  render() {
    
    const language = typeof window !== 'undefined'? navigator.userLanguage || navigator.language : 'cs-CZ';

    const ScrollContent = (
      <div className="scrollWrapper">
        <Navbar></Navbar>
        {this.props.children()}
      </div>
    );

    console.log(this.state.isTouch)
    if (this.state.isTouch === false) {
      return (
        <div>
  
          <Helmet htmlAttributes={{"lang": language}}>
            <title>JNJ Art Group</title>
          </Helmet>
  
        
        <HorizontalScroll>
          {ScrollContent}
        </HorizontalScroll>
  
        </div>
      );
    }

    return (
      <div>
  
      <Helmet htmlAttributes={{"lang": language}}>
        <title>JNJ Art Group</title>
      </Helmet>

      {ScrollContent}

    </div>
    )

  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
