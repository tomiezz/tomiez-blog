import { Button, Divider, Menu, Popover } from 'antd';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { HiMenuAlt3 } from '@react-icons/all-files/hi/HiMenuAlt3';
import { BsTag } from '@react-icons/all-files/bs/BsTag';
import { GiConvergenceTarget } from '@react-icons/all-files/gi/GiConvergenceTarget';
import VerticalMenu from 'components/VerticalMenu';

import { createUseStyles } from 'react-jss';
import { AppRoute } from 'utils/constant';
import ProfileImage from 'images/profile-image.png';
import { TypeAppMenu } from './types';

const useStyles = createUseStyles({
  wrapper: {},
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    background: 'white',
  },
  divImg: {
    width: 50,
    height: 50,
    backgroundSize: 'cover',
    borderRadius: '15%',
  },
  divider: {
    margin: 0,
    marginBottom: 15,
  },
});

function AppMenuMb() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div
          className={classes.divImg}
          style={{
            backgroundImage: `url(${ProfileImage})`,
          }}
        />
        <Popover
          placement="bottomRight"
          content={<VerticalMenu />}
          trigger="click"
        >
          <Button
            type="text"
            icon={<HiMenuAlt3 size={28} />}
            onClick={handleToggleMenu}
          />
        </Popover>
      </div>

      <Divider dashed className={classes.divider} />
    </div>
  );
}

export default AppMenuMb;
