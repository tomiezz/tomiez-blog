import { Col, Row } from 'antd';
import BaseLayout from 'components/BaseLayout';
import PageLayout from 'components/PageLayout';
import PostItem from 'components/PostItem';
import SEO from 'components/Seo';
import { graphql, Link } from 'gatsby';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { MarkdownRemarkFrontmatter, MyBlogQuery } from '../../../graphql-types';

const useStyles = createUseStyles(() => ({
  wrapper: {},
}));

const title = 'Blog';
const description = 'Blog page of tomiez.com';

function Blog({ data }) {
  const { allMarkdownRemark }: MyBlogQuery = data;
  const classes = useStyles();
  return (
    <BaseLayout>
      <SEO title={title} description={description} />
      <PageLayout title="Blog">
        <div className={classes.wrapper}>
          <Row gutter={[16, 32]}>
            {allMarkdownRemark &&
              allMarkdownRemark.edges.map((val, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col key={key} lg={8} md={12} sm={24}>
                  <div>
                    <PostItem
                      {...(val.node.frontmatter as MarkdownRemarkFrontmatter)}
                    />
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </PageLayout>
    </BaseLayout>
  );
}

export const query = graphql`
  query MyBlog($formatString: String = "MMMM Do, YYYY") {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            date(formatString: $formatString)
            excerpt
            slug
            tags
            title
            cover {
              childImageSharp {
                fluid {
                  src
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
