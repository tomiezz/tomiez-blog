import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { MDXProvider } from '@mdx-js/react';

import BaseLayout from 'components/BaseLayout';
import SEO from 'components/Seo';
import ComingSoon from 'components/ComingSoon';
import PageLayout from 'components/PageLayout';

const useStyles = createUseStyles({
  comingSoonWrap: {
    height: '100%',
  },
});

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const MDXLayout = (props: Props) => {
  const { description, title, children } = props;
  const classes = useStyles();
  return (
    <BaseLayout>
      <SEO title={title} description={description} />
      <PageLayout title={title}>
        <MDXProvider>{children}</MDXProvider>
      </PageLayout>
    </BaseLayout>
  );
};

export default MDXLayout;
