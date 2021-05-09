import { Menu } from 'antd';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { BsPencil } from '@react-icons/all-files/bs/BsPencil';
import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { BsTag } from '@react-icons/all-files/bs/BsTag';
import { GiConvergenceTarget } from '@react-icons/all-files/gi/GiConvergenceTarget';
import { createUseStyles } from 'react-jss';

import { AppRoute } from 'utils/constant';
import { TypeAppMenu } from './types';

const menuArr: TypeAppMenu[] = [
  {
    title: 'About',
    link: AppRoute.HOME,
    icon: <BsPerson size={20} />,
  },
  {
    title: 'Blog',
    link: AppRoute.BLOG,
    icon: <BsPencil size={20} />,
  },
  {
    title: 'Tags',
    link: AppRoute.TAGS,
    icon: <BsTag size={20} />,
  },
  {
    title: 'My service',
    link: AppRoute.SERVICE,
    icon: <GiConvergenceTarget size={20} />,
  },
];

const useStyles = createUseStyles({
  menu: {
    border: 'unset',
  },
  menuItem: {
    display: 'flex !important',
    alignItems: 'center',
  },
});

function VerticalMenu() {
  const classes = useStyles();
  return (
    <Menu
      mode="vertical"
      className={classes.menu}
      // selectedKeys={[selectedKey]}
    >
      {menuArr.map(menuItem => (
        <Menu.Item
          className={classes.menuItem}
          key={menuItem.link}
          icon={menuItem.icon}
        >
          <Link to={menuItem.link}> {menuItem.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default VerticalMenu;
