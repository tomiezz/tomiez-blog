import { MenuItemProps } from 'antd';
import React from 'react';
import { AppRoute } from 'utils/constant';

type TypeAppMenu = {
  title: string;
  link: AppRoute;
} & MenuItemProps;

export { TypeAppMenu };
