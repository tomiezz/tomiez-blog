import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import BaseLayout from 'components/BaseLayout';
import SEO from 'components/Seo';
import ComingSoon from 'components/ComingSoon';
import PageLayout from 'components/PageLayout';

const useStyles = createUseStyles({
  comingSoonWrap: {
    height: '100%',
  },
});

const MyServicePage = () => {
  const classes = useStyles();
  return (
    <BaseLayout>
      <SEO title="My services" description="My services page of tomiez.com" />
      <PageLayout title="My services">
        <div />
      </PageLayout>
    </BaseLayout>
  );
};

export default MyServicePage;
