import Head from 'next/head';

import { Button } from '../../../../button';

import { useTheme, globalCss } from '../../../../../theme';

import { Container, Header, Main } from '../../styled-components';

import { AppContainerProps } from '../../types';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});

const AppContainer = (props: AppContainerProps) => {
  const { changeTheme, theme } = useTheme();

  const { children } = props;

  function handleChangeTheme() {
    changeTheme();
  }

  globalStyles();
  return (
    <Container>
      <Head>
        <title>App test stitches</title>
        <meta name="description" content="App test stitches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Button
          type="button"
          size="small"
          color="info"
          onClick={handleChangeTheme}
        >
          Tema {theme === 'light' ? 'Light' : 'Dark'}
        </Button>
      </Header>
      <Main>
        <div>{children}</div>
      </Main>
    </Container>
  );
};

export { AppContainer };
