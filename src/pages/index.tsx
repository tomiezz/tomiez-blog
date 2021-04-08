import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import BaseLayout from 'components/BaseLayout';
import SEO from '../components/Seo';

const useStyles = createUseStyles({});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <BaseLayout>
      <SEO title="Home" />
    </BaseLayout>
  );
};

export default IndexPage;
