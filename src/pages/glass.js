import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';

import Image from '../components/Image'


export default class GlassPage extends React.Component {

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        {posts.filter(post => post.node.frontmatter.templateKey === 'page').map(({ node: post }) => {
          return (
            <header key={post.id}>
        <p>
          <span className="en">{post.frontmatter.description}</span>
          <span className="cs">{post.frontmatter.popis}</span>
        </p>
      </header>
          );
        })}
          {posts.filter(post => post.node.frontmatter.templateKey === 'single').map(({ node: post }) => {
            return (
              <figure className="thumbnail" key={post.id}>
                <Image
                  path={post.frontmatter.thumbnail}
                  title={post.frontmatter.title}
                />
                <figcaption>
                  <span className="cs">{post.frontmatter.nazev}</span>
                  <span className="en">{post.frontmatter.title}</span>
                  <small>
                    <span className="cs">{post.frontmatter.cena} CZK</span>
                    <span className="en">{post.frontmatter.price} EUR</span>
                  </small>
                </figcaption>
              </figure>
            );
          })}
      </section>
    );
  }
}

export const glassPageQuery = graphql`
  query glassQuery {
    allMarkdownRemark(filter: {frontmatter: {category: { eq: "glass" } }}) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            category
            nazev
            title
            cena
            price
            thumbnail
            description
            popis
          }
        }
      }
    }
  }
`;
