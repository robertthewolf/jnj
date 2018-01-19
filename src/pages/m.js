import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';

export default class MirrorPage extends React.Component {


  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <div className="container">
          {posts.filter(post => post.node.frontmatter.templateKey === 'mirror').map(({ node: post }) => {
            return (
              <figure className="thumbnail" key={post.id}>
                <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
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
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query mQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            templateKey
            nazev
            title
            cena
            price
            thumbnail
          }
        }
      }
    }
  }
`;
