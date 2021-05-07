import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import BaseLayout from 'components/BaseLayout';
import SEO from 'components/Seo';
import ComingSoon from 'components/ComingSoon';
import PageLayout from 'components/PageLayout';

const useStyles = createUseStyles({
  comingSoonWrap: {
    // height: '100%',
  },
});

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const { allMarkdownRemark } = data;

  console.log('MARKDOWN: ', allMarkdownRemark);

  return (
    <BaseLayout>
      <SEO title="Homepage" description="Homepage of tomiez.com" />
      <PageLayout title="About">
        <div
          dangerouslySetInnerHTML={{
            __html: allMarkdownRemark.edges[0].node.html,
          }}
        />
      </PageLayout>
    </BaseLayout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: "/about-data" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export default IndexPage;
