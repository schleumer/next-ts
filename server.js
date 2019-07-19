require("@formatjs/intl-relativetimeformat/polyfill");
require("@formatjs/intl-relativetimeformat/dist/locale-data/en");
require("@formatjs/intl-relativetimeformat/dist/locale-data/pt");

const { basename } = require("path");
const { createServer } = require("http");
const accepts = require("accepts");
const glob = require("glob");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Get the supported languages by looking for translations in the `lang/` dir.
const supportedLanguages = glob
  .sync('./lang/*.json')
  .map(f => basename(f, '.json'))

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = locale => {
  return require(`./lang/${locale}.json`)
}

app.prepare().then(() => {
  createServer((req, res) => {
    const accept = accepts(req)
    const langs = accept.languages(supportedLanguages) || 'pt';
    const locale = accept.language(langs) || 'pt'
    req.locale = locale
    // req.localeDataScript = getLocaleDataScript(locale)
    req.messages = getMessages(locale)
    handle(req, res)
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})