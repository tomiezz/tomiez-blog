import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import BaseLayout from 'components/BaseLayout';
import SEO from 'components/Seo';
import ComingSoon from 'components/ComingSoon';
import PageLayout from 'components/PageLayout';
import {
  getHomepageBreadcrumbSchema,
  getWebsiteJsonSchema,
} from 'utils/json-ld';

const useStyles = createUseStyles({
  comingSoonWrap: {
    // height: '100%',
  },
});

const title = 'Homepage';
const description = 'Homepage of tomiez.com';

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const { allMarkdownRemark } = data;

  const homepageJsonSchema = JSON.stringify([
    getWebsiteJsonSchema(title),
    getHomepageBreadcrumbSchema(),
  ]);

  return (
    <BaseLayout>
      <SEO
        title={title}
        description={description}
        jsonLD={homepageJsonSchema}
      />
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
