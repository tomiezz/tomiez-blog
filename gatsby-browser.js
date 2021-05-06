/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
const RootLayout = require('./src/components/RootLayout').default;

const WrappageElement = ({ element, props }) => {
  return <RootLayout {...props}>{element}</RootLayout>;
};

exports.wrapRootElement = WrappageElement;
