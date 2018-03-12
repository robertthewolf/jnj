import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import Toggle from '../components/Toggle';
import Signature from '../components/Signature';

import facebookLogo from '../img/facebook.svg';
import instagramLogo from '../img/instagram.svg';

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
          <Image sizes={post.frontmatter.thumbnail.childImageSharp.sizes} alt="JNJ Art Group" />
        </header>
        <footer>

          <p>
            <span className="en">{post.frontmatter.order}</span>
            <span className="cs">{post.frontmatter.objednavka}</span>
          </p>
          <a href={`mailto:${post.frontmatter.email}`}>{post.frontmatter.email}</a>
          <a href={`tel:${post.frontmatter.phone}`}>{post.frontmatter.phone}</a>
          <div className="socials">
            <a href={post.frontmatter.facebook}>
              <img src={facebookLogo} alt="facebook" />
            </a>
            <a href={post.frontmatter.instagram}>
              <img src={instagramLogo} alt="instagram" />
            </a>
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
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
              aspectRatio
            }
          }
        }
        order
        objednavka
        email
        phone
        facebook
        instagram
      }
    }
}
`;
