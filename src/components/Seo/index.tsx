/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import SiteMetadataConfig from '../../../site-metadata';

interface Props {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

function SEO(props: Props) {
  const { title, article = false, description, image } = props;
  const { pathname } = useLocation();

  const {
    siteAuthor,
    siteDescription,
    siteImage,
    siteTitle,
    siteTitleTemplate,
    siteTwitterUsername,
    siteUrl,
  } = SiteMetadataConfig;

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      // htmlAttributes={{
      //   lang,
      // }}
      title={title}
      titleTemplate={siteTitleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {article && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteTwitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}

export default SEO;
