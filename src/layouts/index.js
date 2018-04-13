import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typography from 'typography';
import './all.sass';

// images and favicon
import logo from '../img/logo.svg';
import appleTouchIcon from '../img/apple-touch-icon.png';
import favicon32 from '../img/favicon-32x32.png';
import favicon16 from '../img/favicon-16x16.png';
import safariPinnedTab from '../img/safari-pinned-tab.svg';


import HorizontalScroll from 'react-scroll-horizontal';

import Navbar from '../components/Navbar';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

//working on this!
import mediumZoom from 'medium-zoom'



const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
);

class TemplateWrapper extends React.Component {

  state = ({
    isTouch: false
  })

  handleTouchStart = () => {
    this.setState({
      isTouch: true
    })
  }

  componentDidMount() {
   }

  render() {
    
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
      <Provider store={store}>
      <div onTouchStart={this.handleTouchStart}>
  
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="manifest" href="/other/site.webmanifest" />
          <link rel="mask-icon" href={safariPinnedTab} color="#535353" />
          <meta name="msapplication-TileColor" content="#535353" />
          <meta name="theme-color" content="#ffffff" />

          <title>JNJ Art Group</title>

        </Helmet>

        {ScrollContainer}

      </div>
      </Provider>
    )

  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.any
};

export default TemplateWrapper;
