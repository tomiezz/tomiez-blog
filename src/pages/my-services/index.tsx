import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import BaseLayout from 'components/BaseLayout';
import SEO from 'components/Seo';
import ComingSoon from 'components/ComingSoon';

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
      <ComingSoon className={classes.comingSoonWrap} />
    </BaseLayout>
  );
};

export default TagPage;
