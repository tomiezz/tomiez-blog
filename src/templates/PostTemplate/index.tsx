import BaseLayout from 'components/BaseLayout';
import { graphql } from 'gatsby';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  wrapper: {
    padding: '30px 0',
  },
}));

export default function PostTemplate({ data, ...rest }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const classes = useStyles();
  React.useEffect(() => {
    console.log('CURRENT PROPS: ', rest);
  }, []);
  return (
    <BaseLayout>
      <div className={classes.wrapper}>
        {frontmatter.title}

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
      }
    }
  }
`;
