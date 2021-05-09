import siteMetadata from '../../site-metadata';
import { AppRoute } from './constant';

export const getBlogpostJsonSchema = (props: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateCreated?: string;
  dateModified?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': siteMetadata.siteUrl,
  },
  name: props.title,
  alternateName: siteMetadata.siteTitle,
  headline: props.title,
  image: props.imageUrl || `${siteMetadata.siteUrl}${siteMetadata.siteImage}`,
  description: props.description,
  author: {
    '@type': 'Person',
    name: siteMetadata.siteAuthor,
    url: siteMetadata.siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: siteMetadata.siteAuthor,
    url: siteMetadata.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}${siteMetadata.siteImage}`,
    },
  },
  datePublished: props.dateCreated,
  dateCreated: props.dateCreated,
  dateModified: props.dateModified,
});

export const getWebsiteJsonSchema = (title?: string) => ({
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  url: siteMetadata.siteUrl,
  name: title || siteMetadata.siteTitle,
  alternateName: siteMetadata.siteTitle,
});

export interface IBreadcrumbItem {
  position: number;
  title: string;
  imageUrl?: string;
  url: string;
}

export const getBreadcrumbJsonSchema = (breadcrumbList: IBreadcrumbItem[]) => ({
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbList.map(breadcrumbItem => ({
    '@type': 'ListItem',
    position: breadcrumbItem.position,
    item: {
      '@id': breadcrumbItem.url,
      name: breadcrumbItem.title,
      image:
        breadcrumbItem.imageUrl ||
        `${siteMetadata.siteUrl}${siteMetadata.siteImage}`,
    },
  })),
});

export const getHomepageBreadcrumbSchema = () => {
  const breadcrumbList: IBreadcrumbItem[] = Object.keys(AppRoute).map(
    (item, index) => ({
      position: index,
      title: item,
      url: `${siteMetadata.siteUrl}${AppRoute[item]}`,
    }),
  );
  return getBreadcrumbJsonSchema(breadcrumbList);
};
