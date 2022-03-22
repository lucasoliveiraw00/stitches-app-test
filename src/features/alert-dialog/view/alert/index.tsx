import { styled } from '../../../../theme';

const Text = styled('p', {
  fontFamily: '$untitled',
  color: '$gray',
  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});

const AlertDialog = () => (
  <Text as="h3" size="3">
    Hello, from Stitches.
  </Text>
);

export { AlertDialog };
