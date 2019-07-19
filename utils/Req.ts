import { IncomingMessage } from "http";

export class Req extends IncomingMessage {
    locale?: string
    localeDataScript: any
    messages: any
}