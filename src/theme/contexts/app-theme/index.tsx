import React, { createContext, useMemo, useState } from 'react';

import { lightTheme } from '../../styles/theme/light';

import { AppThemeDataContext, AppThemeProps } from './types';

export const AppThemeContext = createContext({} as AppThemeDataContext);

export const AppThemeProvider = ({
  children,
}: AppThemeProps): React.ReactElement => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const configTheme = useMemo(
    () => ({
      changeTheme: () => setIsLightTheme(prevState => !prevState),
    }),
    [],
  );

  return (
    <AppThemeContext.Provider value={configTheme}>
      <div className={isLightTheme ? lightTheme : undefined}>{children}</div>
    </AppThemeContext.Provider>
  );
};
