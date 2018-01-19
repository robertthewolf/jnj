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
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts.filter(post => post.node.frontmatter.templateKey === 'mirror').map(({ node: post }) => {
            return (
              <div className="thumbnail" key={post.id}>
                <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
                <p>
                  {post.frontmatter.nazev}
                  {post.frontmatter.title}
                </p>
                <p>
                  {post.frontmatter.cena}
                  {post.frontmatter.price}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query MirrorQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            nazev
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
