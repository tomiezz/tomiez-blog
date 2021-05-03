import { Menu, Typography } from 'antd';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { BsPencil } from '@react-icons/all-files/bs/BsPencil';
import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { BsTag } from '@react-icons/all-files/bs/BsTag';
import { GiConvergenceTarget } from '@react-icons/all-files/gi/GiConvergenceTarget';
import { createUseStyles } from 'react-jss';

import { AppRoute, CssBreakpoints } from 'utils/constant';
import { TypeAppMenu } from './types';

const useStyles = createUseStyles({
  wrapper: {},
  title: {
    position: 'relative',
    marginBottom: '30px !important',
    '&:before': {
      content: `''`,
      position: 'absolute',
      bottom: '-10px',
      width: 30,
      height: 3,
      backgroundImage: `linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)`,
      display: 'block',
    },
  },
  [`@media (min-width: ${CssBreakpoints.MD}px)`]: {
    wrapper: {
      paddingTop: 20,
    },
    title: {},
  },
});

interface Props {
  title: string;
  children: React.ReactNode;
}

function PageLayout(props: Props) {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <div className={classes.wrapper}>
      <Typography.Title className={classes.title} level={3}>
        {title}
      </Typography.Title>
      {children}
    </div>
  );
}

export default PageLayout;
