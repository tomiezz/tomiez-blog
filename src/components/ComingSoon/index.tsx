/* eslint-disable react/require-default-props */
import { Typography } from 'antd';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
}));

interface Props {
  className?: string;
}

function ComingSoon(props: Props) {
  const { className } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.wrapper} ${className}`}>
      <Typography.Title level={3}>Coming soon...</Typography.Title>
    </div>
  );
}

export default ComingSoon;
