import { Palette } from './types';

const palette: Palette = {
  white: ['#ffffff'],
  teal: ['#2c91ad', '#206a7f', '#54b8d3'],
  green: ['#29A152', '#1d7246', '#47d089'],
  orange: ['#F27A00', 'rgba(242, 122, 0, 0.5)'],
};

const colors = {
  white: palette.white[0],

  green: palette.green[0],
  green100: palette.green[1],
  green200: palette.green[2],

  teal: palette.teal[0],
  teal100: palette.teal[1],
  teal200: palette.teal[2],

  orange: palette.orange[0],
  orange100: palette.orange[1],

  gray: '#1D1D26',
  gray100: '#B8C0CC',

  negative: '#E61739',
  warning: '$orange',

  backgroundColor: '#F4F8FA',
};

export { colors };
