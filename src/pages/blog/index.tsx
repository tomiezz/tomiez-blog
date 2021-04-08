import { graphql } from 'gatsby';
import React from 'react';

function Blog({ data }) {
  return (
    <div>
      {data.allMarkdownRemark &&
        data.allMarkdownRemark.edges.map((val, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={key}> {key}</div>
        ))}
    </div>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
