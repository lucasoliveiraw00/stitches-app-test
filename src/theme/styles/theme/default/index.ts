import { colors } from './colors';
import { space } from './space';
import { fontSizes } from './font-sizes';
import { fonts } from './fonts';

const defaultTheme = {
  colors,
  space,
  fontSizes,
  fonts,
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borderWidths: {
    bw1: 0.5,
  },
  borderStyles: {
    default: 'solid',
  },
  radii: {
    small: '6px',
    medium: '8px',
    large: '10px',
  },
  shadows: {
    teal200: '$colors$teal200',
    gray200: '$colors$gray200',
  },
  zIndices: {},
  transitions: {},
};

export { defaultTheme };
