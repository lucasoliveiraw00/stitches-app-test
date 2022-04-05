import { styled } from '../../../../../theme';

export const StyledFieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

export const StyledLabel = styled('label', {
  fontSize: 15,
  color: '$teal',
  width: 90,
  textAlign: 'right',
});

export const StyledInput = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: '$gray',
  boxShadow: `0 0 0 1px $colors$teal100`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px $colors$teal` },
});
