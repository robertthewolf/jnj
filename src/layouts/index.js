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

  handleTouchStart = () => {
    this.setState({
      isTouch: true
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

    let ScrollContainer  = (
      <HorizontalScroll>
        {ScrollContent}
      </HorizontalScroll>
    );

    if (this.state.isTouch === true) ScrollContainer = ScrollContent;

    return (
      <div onTouchStart={this.handleTouchStart}>
  
        <Helmet htmlAttributes={{"lang": language}}>
          <title>JNJ Art Group</title>
        </Helmet>

        {ScrollContainer}

      </div>
    )

  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
