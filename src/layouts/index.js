import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import logo from '../img/logo.svg';
import Typography from 'typography';
import './all.sass';

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
          <title>JNJ Art Group</title>
        </Helmet>

        {ScrollContainer}

      </div>
      </Provider>
    )

  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
