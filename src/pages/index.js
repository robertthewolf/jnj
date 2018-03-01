import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Toggle from '../components/Toggle';
import Signature from '../components/Signature';

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
            <Toggle/>
          </p>
        </header>
        <footer>

          <p>
            <span className="en">{post.frontmatter.order}</span>
            <span className="cs">{post.frontmatter.objednavka}</span>
          </p>
          <a href="mailto:jnjartgroup@gmail.com">jnjartgroup@gmail.com</a>
          <a href="tel:+420776833746">+420 776 833 746</a>
          <div className="socials">
          </div>
          <Signature/>
          </footer>
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
        order
        objednavka
      }
    }
}
`;
