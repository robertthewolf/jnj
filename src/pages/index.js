import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Toggle from '../components/Toggle';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <header>
          <p>
            <span className="en">{post.frontmatter.description}</span>
            <span className="cs">{post.frontmatter.popis}</span>
            <Toggle></Toggle>
          </p>
        </header>
      </section>
    );
  }
}

export const indexPageQuery = graphql`
  query IndexQuery {
    markdownRemark (frontmatter: { category: { eq: "general" } }) {
      frontmatter {
        title
        nazev
        popis
        description
      }
    }
}
`;
