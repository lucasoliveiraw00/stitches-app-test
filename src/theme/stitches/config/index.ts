import { createStitches } from '@stitches/react';

import { defaultTheme } from '../../styles/theme/default';

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config: configTheme,
} = createStitches({
  prefix: 'stitches',
  theme: defaultTheme,
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  configTheme,
};
