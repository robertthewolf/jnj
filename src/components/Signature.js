import React from 'react';

class Signature extends React.Component {
constructor() {
    super();
    const date = new Date();
    const currentYear = date.getFullYear();
    this.state = {
        year: currentYear
    }
}
render() {
  return(
    <div className="signature">
        Made by <a rel="external" target="_blank" href="http://robertwolf.cz/">Robert Wolf</a>  ♥ {this.state.year}
    </div>
  );
  }
}

export default Signature;
