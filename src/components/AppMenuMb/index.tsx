import { Button, Divider, Menu, Popover } from 'antd';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { BsPencil } from '@react-icons/all-files/bs/BsPencil';
import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { HiMenuAlt3 } from '@react-icons/all-files/hi/HiMenuAlt3';
import { BsTag } from '@react-icons/all-files/bs/BsTag';
import { GiConvergenceTarget } from '@react-icons/all-files/gi/GiConvergenceTarget';
import { createUseStyles } from 'react-jss';
import { AppRoute } from 'utils/constant';
import ProfileImage from 'images/profile-image.png';
import { TypeAppMenu } from './types';

const menuArr: TypeAppMenu[] = [
  {
    title: 'About',
    link: AppRoute.HOME_PAGE,
    icon: <BsPerson size={20} />,
  },
  {
    title: 'Blog',
    link: AppRoute.BLOG_PAGE,
    icon: <BsPencil size={20} />,
  },
  {
    title: 'Tags',
    link: AppRoute.TAGS_PAGE,
    icon: <BsTag size={20} />,
  },
  {
    title: 'My service',
    link: AppRoute.SERVICE_PAGE,
    icon: <GiConvergenceTarget size={20} />,
  },
];

const useStyles = createUseStyles({
  wrapper: {},
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divImg: {
    width: 50,
    height: 50,
    backgroundSize: 'cover',
    borderRadius: '15%',
  },
});

function AppMenuMb() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  const content = menuArr.map(item => (
    <div style={{ textAlign: 'center', margin: '10px 0' }} key={item.title}>
      <Link to={item.link}> {item.title}</Link>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div
          className={classes.divImg}
          style={{
            backgroundImage: `url(${ProfileImage})`,
          }}
        />
        <Popover placement="bottomRight" content={content} trigger="click">
          <Button
            type="text"
            icon={<HiMenuAlt3 size={28} />}
            onClick={handleToggleMenu}
          />
        </Popover>
      </div>

      <Divider dashed />
    </div>
  );
}

export default AppMenuMb;
