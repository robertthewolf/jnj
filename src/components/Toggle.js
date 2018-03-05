import React from 'react';
import { Helmet } from 'react-helmet';

export default class Toggle extends React.Component {
  state = {
      language: typeof window !== 'undefined'? navigator.userLanguage || navigator.language : 'cs-CZ',
      isCzech: this.language !== 'cs-CZ'? false : true
  };
  
  handleClick = () => {
    this.setState({
      isCzech: !this.state.isCzech
    })
  }

  render() {
    const language = this.state.isCzech ? 'cs-CZ' : 'en-GB'

    return (
      <button onClick={this.handleClick}>
        <Helmet htmlAttributes={{"lang": language}} />
        {this.state.isCzech ? 'EN' : 'CS'}
      </button>
    );
  }
}
