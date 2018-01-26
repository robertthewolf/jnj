import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    var el = document.querySelector('html');

    if (el.getAttribute('lang') == 'en') {

      el.setAttribute('lang', 'cs');

    } else {

      el.setAttribute('lang', 'en');

    }

  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'CS' : 'EN'}
      </button>
    );
  }
}
