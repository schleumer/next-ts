import * as config from "next/config";

config.default().setConfig(require('./next.config'))

require('./server')