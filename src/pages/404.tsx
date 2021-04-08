import BaseLayout from 'components/BaseLayout';
import * as React from 'react';

import SEO from '../components/Seo';

const NotFoundPage = () => (
  <BaseLayout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BaseLayout>
);

export default NotFoundPage;
