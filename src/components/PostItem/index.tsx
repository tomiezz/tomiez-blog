import { Card, Image, Typography } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { MarkdownRemarkFrontmatter } from '../../../graphql-types';

const { Title } = Typography;

const useStyles = createUseStyles(() => ({
  wrapper: {},
  divImg: {
    width: '100%',
    paddingTop: '56.25%',
    backgroundSize: 'cover',
    borderRadius: 10,
  },
}));

type Props = MarkdownRemarkFrontmatter;

function PostItem(props: Props) {
  const { slug, cover, title, date, excerpt } = props;
  const classes = useStyles();
  return (
    <Link to={`../${slug}`}>
      <div className={classes.wrapper}>
        <div
          className={classes.divImg}
          style={{
            backgroundImage: `url(${cover?.childImageSharp?.fluid?.src})`,
          }}
        />
        <div>{date}</div>
        <Title level={5}>{title}</Title>
        <Typography>{excerpt}</Typography>
      </div>
    </Link>
  );
}

export default PostItem;
