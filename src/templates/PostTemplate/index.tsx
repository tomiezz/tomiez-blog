import { graphql } from 'gatsby';
import React from 'react';

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      {frontmatter.title}

      {html && (
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
