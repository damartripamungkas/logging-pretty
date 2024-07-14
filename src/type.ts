export type TypeArgs = string | null
export type TypeForce = `console` | `file` | `all`
export type TypeOvrFunction = ({ strTime, strTag, strStyleTag, strMsg, strStyleMsg }: { strTime: string; strTag: string; strStyleTag: string; strMsg: string; strStyleMsg: string }) => void
