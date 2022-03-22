import React from 'react';

export type AppThemeProps = {
  children: React.ReactElement | React.ReactElement[];
};

export type AppThemeDataContext = {
  theme: 'light' | 'dark' | string;
  changeTheme: () => void;
};
