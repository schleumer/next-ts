import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/pt';

import App, { Container, AppProps } from 'next/app'
import React from 'react'
import { IntlProvider } from 'react-intl'

interface TheAppProps extends AppProps {
    locale: any
    messages: any
    initialNow: number
}

export default class TheApp extends App<TheAppProps> {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx
    const { locale, messages } = req || window.__NEXT_DATA__.props
    const initialNow = Date.now()

    return { pageProps, locale, messages, initialNow }
  }

  render () {
    const { Component, pageProps, locale, messages, initialNow } = this.props

    console.log(locale, messages)

    return (
      <Container>
        <IntlProvider
          locale={locale}
          messages={messages}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </Container>
    )
  }
}