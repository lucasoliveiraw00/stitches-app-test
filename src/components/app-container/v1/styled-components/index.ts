import { styled } from '../../../../theme';

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$backgroundColor',
});

export const Main = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > div': {
    minWidth: 500,
    minHeight: 500,
    padding: 20,
    borderWidth: 1,
    borderColor: '$gray100',
    borderStyle: 'solid',
    borderRadius: 6,
    backgroundColor: '$white',
  },
});

export const Header = styled('header', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingTop: '1.5rem',
  paddingRight: '1.5rem',
  paddingBottom: '1.5rem',
});
