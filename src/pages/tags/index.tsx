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

const TagPage = () => {
  const classes = useStyles();
  return (
    <BaseLayout>
      <SEO title="Home" />
      <PageLayout title="Tags">
        <div />
      </PageLayout>
    </BaseLayout>
  );
};

export default TagPage;
