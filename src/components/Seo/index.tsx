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
import { getBlogpostJsonSchema, getBreadcrumbJsonSchema } from 'utils/json-ld';

import SiteMetadataConfig from '../../../site-metadata';

interface Props {
  title: string;
  description: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
  };
  datetimeInfo?: {
    datePublished: string;
    dateCreated: string;
    dateModified: string;
  };
  article?: boolean;
  keywords?: string[];
  lang?: string;
  jsonLD?: string;
}

function SEO(props: Props) {
  const {
    title,
    article = false,
    description,
    image,
    keywords = [],
    lang = 'en',
    jsonLD,
    datetimeInfo,
  } = props;
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
    imageUrl: `${siteUrl}${image?.url || siteImage}`,
    url: `${siteUrl}${pathname}`,
    ...datetimeInfo,
  };

  const canonical = pathname ? `${siteUrl}${pathname}` : null;

  const defaultJsonLD = JSON.stringify([
    getBlogpostJsonSchema(seo),
    getBreadcrumbJsonSchema([
      { position: 1, title: seo.title, url: seo.url, imageUrl: seo.imageUrl },
    ]),
  ]);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={siteTitleTemplate}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
    >
      {/* General tags */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.imageUrl} />
      <meta name="keywords" content={keywords.join(',')} />

      {/* JSON-LD tags */}
      <script type="application/ld+json">{jsonLD || defaultJsonLD}</script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:image:width" content={`${image?.width}`} />
      <meta property="og:image:height" content={`${image?.height}`} />
      <meta property="og:locale" content={lang || 'en_US'} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:site" content={siteTwitterUsername} />
      <meta name="twitter:creator" content={siteTwitterUsername} />
    </Helmet>
  );
}

export default SEO;
