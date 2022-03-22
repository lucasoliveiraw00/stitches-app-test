import { styled } from '../../../../theme';

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$small',
  border: 'unset',
  cursor: 'pointer',
  transition: '0.8s',
  '&:hover': {
    opacity: 0.8,
  },
  variants: {
    color: {
      success: { backgroundColor: '$green', color: '$white' },
      info: { backgroundColor: '$teal', color: '$white' },
      warning: { backgroundColor: '$warning', color: '$white' },
    },
    size: {
      small: {
        height: 45,
        width: 160,
        fontSize: 14,
        fontWeight: 500,
      },
      medium: {
        height: 48,
        width: 216,
        fontSize: 14,
        fontWeight: 500,
      },
      large: {
        height: 48,
        width: 235,
        fontSize: 14,
        fontWeight: 500,
      },
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        '&:hover': {
          color: '$white',
        },
      },
    },
  },
  compoundVariants: [
    {
      color: 'success',
      outlined: true,
      css: {
        color: '$green',
        borderColor: '$green',
        '&:hover': {
          backgroundColor: '$green',
        },
      },
    },
    {
      color: 'info',
      outlined: true,
      css: {
        color: '$teal',
        borderColor: '$teal',
        '&:hover': {
          backgroundColor: '$teal',
        },
      },
    },
    {
      color: 'warning',
      outlined: true,
      css: {
        color: '$warning',
        borderColor: '$warning',
        '&:hover': {
          backgroundColor: '$warning',
        },
      },
    },
  ],
  defaultVariants: { color: 'success', size: 'small' },
});
