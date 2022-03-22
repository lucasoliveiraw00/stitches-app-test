import React, { createContext, useMemo, useState } from 'react';

import { darkTheme } from '../../styles/theme/dark';

import { AppThemeDataContext, AppThemeProps } from './types';

export const AppThemeContext = createContext({} as AppThemeDataContext);

export const AppThemeProvider = ({
  children,
}: AppThemeProps): React.ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const configTheme = useMemo(
    () => ({
      changeTheme: () => setIsDarkTheme(prevState => !prevState),
      theme: isDarkTheme ? 'light' : 'dark',
    }),
    [isDarkTheme],
  );

  return (
    <AppThemeContext.Provider value={configTheme}>
      <div className={isDarkTheme ? darkTheme : undefined}>{children}</div>
    </AppThemeContext.Provider>
  );
};
