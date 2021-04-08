import { Col, Row, Image, Typography } from 'antd';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { BiCalendarAlt } from '@react-icons/all-files/bi/BiCalendarAlt';
import { GoLocation } from '@react-icons/all-files/go/GoLocation';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';

import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import AppMenu from 'components/AppMenu';

import { Color } from 'style';
import ProfileImage from '../../images/profile-image.jpg';

const { Title } = Typography;

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
}

const useStyles = createUseStyles({
  root: {
    height: '100%',
    width: '100%',
    padding: 40,
  },
  wrapper: {
    background: Color.WHITE,
    maxWidth: 1264,
    margin: '0 auto',
    borderRadius: 10,
  },
  sidebar: {
    padding: 20,
  },
  profileImage: {
    borderRadius: 10,
  },
  name: {
    textAlign: 'center',
    margin: '20px 0',
  },
  lableWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    padding: '10px 20px',
    backgroundColor: Color.GRAY_200,
    borderRadius: '50px',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0',
    '& > svg': {
      marginRight: 10,
    },
  },
  socialWrap: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '0 5px',
    },
  },
  contentWrap: {
    padding: 20,
  },
});

function BaseLayout(props: Props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Row>
          <Col lg={6}>
            <div className={classes.sidebar}>
              <Image className={classes.profileImage} src={ProfileImage} />
              <Title className={classes.name} level={3}>
                Tomiez
              </Title>
              <div className={classes.lableWrap}>
                <div className={classes.label}>Software engineer</div>
              </div>
              <div className={classes.socialWrap}>
                <div>
                  <AiOutlineGithub size={20} />
                  <FaFacebookF size={20} />
                  <FiTwitter size={20} />
                </div>
              </div>
              <div className={classes.infoRow}>
                <BiCalendarAlt size={24} /> Jun 6,1996
              </div>
              <div className={classes.infoRow}>
                <GoLocation size={24} />
                Hanoi, Vietnam
              </div>
            </div>
          </Col>
          <Col lg={18}>
            <div className={classes.contentWrap}>
              <div>
                <AppMenu />
              </div>
              {children}
            </div>
          </Col>
        </Row>
        {children}
      </div>
    </div>
  );
}

export default BaseLayout;
