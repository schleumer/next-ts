const path = require('path')


module.exports = {
  webpack (config, options) {
    config.resolve.alias['utils'] = path.join(__dirname, './utils')

    config.module.rules[0].include.push(
      path.join(__dirname, "node_modules/react-intl"),
      path.join(__dirname, "node_modules/intl-messageformat")
    )

    return config
  }
}