import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/pt';

import Document, { Head, Main, NextScript, DocumentProps } from 'next/document'

interface IntlDocumentProps extends DocumentProps {
    locale: any
}

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document<IntlDocumentProps> {
  static async getInitialProps (context) {
    const props = await super.getInitialProps(context)
    const {
      req: { locale }
    } = context
    return {
      ...props,
      locale
    }
  }

  render () {
    // Polyfill Intl API for older browsers
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}