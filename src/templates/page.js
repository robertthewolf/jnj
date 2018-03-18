import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import Helmet from 'react-helmet';
import Script from 'react-load-script';

import Toggle from '../components/Toggle';


export const PageTemplate = ({
    posts,
}) => (
    <section className="section">
    {posts.filter(post => post.node.frontmatter.templateKey === 'page').map(({ node: post }) => {
        return (
        <header key={post.id}>
    <p>
        <span className="en">{post.frontmatter.description}</span>
        <span className="cs">{post.frontmatter.popis}</span>
        <Toggle />
    </p>
    </header>
        );
    })}
        {posts.filter(post => post.node.frontmatter.templateKey === 'single').map(({ node: post }) => {

        const aspect = post.frontmatter.thumbnail.childImageSharp.sizes.aspectRatio
        const styleData = { width: `calc(var(--height)*${aspect})` }
        

        return (
            <figure className="thumbnail" key={post.id}>
            <Img
                sizes={post.frontmatter.thumbnail.childImageSharp.sizes}
                style={styleData}
                alt={post.frontmatter.title}
            />
            <figcaption>
                <span className="cs">{post.frontmatter.cena}</span>
                <span className="en">{post.frontmatter.price}</span>
            </figcaption>
            </figure>
        );
        })}
    </section>
);

export default ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
  
    return (
      <PageTemplate
        posts={posts}
      />
    )
  }


export const photographyPageQuery = graphql`
query photographyQuery($category: String!) {
  allMarkdownRemark(filter: {frontmatter: {category: { eq: $category } }}) {
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
          thumbnail {
            childImageSharp {
              sizes(maxWidth: 1000) {
                ...GatsbyImageSharpSizes
                aspectRatio
              }
            }
          }
          description
          popis
        }
      }
    }
  }
}
`;
