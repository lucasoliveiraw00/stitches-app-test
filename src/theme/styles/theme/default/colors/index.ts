import { Palette } from './types';

const palette: Palette = {
  white: ['#ffffff'],
  teal: ['#206A7F', '#54B8D3'],
  green: ['#1D7246', '#47D089'],
};

const colors = {
  white: palette.white[0],

  green: palette.green[0],
  green100: palette.green[1],

  teal: palette.teal[0],
  teal100: palette.teal[1],

  negative: '#E61739',
  warning: '#F27A00',
  gray: '#1D1D26',
};

export { colors };
