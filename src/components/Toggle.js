import React from 'react';
import { Helmet } from 'react-helmet';

//redux
import { connect } from "react-redux";

const Toggle = ({ isCzech, dispatch }) => (

  <button onClick={() => dispatch({
      type: 'TOGGLE_LANGUAGE',
    })}>
    <Helmet htmlAttributes={{"lang": isCzech? 'cs-CZ' : 'en-GB'}} />
    {isCzech? 'EN' : 'CS'}
    {console.log(isCzech)}
  </button>

);

const mapStateToProps = (state) => ({
  isCzech: state.language.isCzech
})

export default connect(mapStateToProps)(Toggle);