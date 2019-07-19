import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/pt';

import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';
import { Keyframes } from '@emotion/serialize';
import { useIntl, FormattedMessage, defineMessages } from 'react-intl';

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`
const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

const Basic = styled.div`
  ${basicStyles};
`

const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`

interface AnimatedProps {
  animation: Keyframes
}

const Animated = styled.div<AnimatedProps>`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`

const messages = defineMessages({
  test: { id: 'test', defaultMessage: 'AAAAAAAAAAAAA' },
})

const App = () => {
  const { formatMessage } = useIntl();

  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            padding: 3rem 1rem;
            margin: 0;
            background: papayawhip;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
      <Head>
        <title>
          {formatMessage(messages.test)}
        </title>
      </Head>
      <div>
        <Basic>Cool Styles</Basic>
        <Combined>
          With <code>:hover</code>.
        </Combined>
        <Animated animation={bounce}>Let's bounce.</Animated>
      </div>
    </React.Fragment>
  )
}

App.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default App