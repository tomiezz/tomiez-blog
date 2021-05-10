import { Image, Typography } from 'antd';
import BaseLayout from 'components/BaseLayout';
import SEO from 'components/Seo';
import { graphql } from 'gatsby';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { CssBreakpoints } from 'utils/constant';

const useStyles = createUseStyles(() => ({
  wrapper: {
    padding: 0,
  },
  [`@media (min-width: ${CssBreakpoints.MD}px)`]: {
    wrapper: {
      padding: '30px 0',
    },
  },
}));

export default function PostTemplate({ data, ...rest }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const classes = useStyles();

  return (
    <BaseLayout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.excerpt}
        article
        image={{ url: frontmatter.cover?.childImageSharp?.fluid?.src }}
      />
      <div className={classes.wrapper}>
        <Typography.Title level={3}>{frontmatter.title}</Typography.Title>
        <Image src={frontmatter.cover?.childImageSharp?.fluid?.src} />
        {html && (
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </BaseLayout>
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
        cover {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      excerpt(pruneLength: 160)
    }
  }
`;
