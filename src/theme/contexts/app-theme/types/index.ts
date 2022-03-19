import React from 'react';
import { CSS } from '../../../stitches/config';

export type AppThemeProps = {
  children: React.ReactElement | React.ReactElement[];
};

export type AppThemeDataContext = {
  changeTheme: () => void;
};
