import chalk from "chalk"
import dayjs from "dayjs"
import { appendFile } from "node:fs/promises"
import { TypeArgs, TypeForce, TypeOvrFunction } from "./type"
const { red, green, yellow, cyan, blue, bgRed, bold, white } = chalk

const getTimeNow = (format: string) => {
  return dayjs().format(format)
}

/**
 *
 * @param pathFile [optional] example "./db.log" if path dont have file, script will create and write new file
 * @param force [optional] force mode, if "pathFile" is set but this is set to "console" it will not write to the log file.
 * @param formatTime [optional] set format date time like YYYY-MM-DD HH:mm:ss.
 * @param ovrRenderLog [optional] override function for render log.
 * @param ovrWriteLog [optional] override function for write log in file.
 * @returns object
 */
const initNew = (pathFile?: TypeArgs, force?: TypeForce, formatTime?: string, ovrRenderLog?: TypeOvrFunction, ovrWriteLog?: TypeOvrFunction) => {
  const isHavePathFile = pathFile ? true : false
  const isHaveForce = force ? true : false
  const isHaveFormatTime = formatTime ? true : false
  const isHaveOvrRenderLog = ovrRenderLog ? true : false
  const isHaveOvrWriteLog = ovrWriteLog ? true : false

  if (isHaveForce === false) {
    if (isHavePathFile === true) {
      force = `all`
    } else {
      force = `console`
    }
  }

  if (isHaveFormatTime === false) {
    formatTime = `YYYY-MM-DD HH:mm:ss:SSS`
  }

  const renderLog = (strTag: string, strMsg: string, colorTag: any, colorMsg: any) => {
    const strTime = getTimeNow(formatTime)
    const strStyleTag = colorTag(strTag)
    if (force == `console` || force == `all`) {
      let strStyleMsg = strMsg
      if (colorMsg) {
        strStyleMsg = colorMsg(strMsg)
      }

      if (isHaveOvrRenderLog === true) {
        ovrRenderLog({ strTime, strTag, strStyleTag, strMsg, strStyleMsg })
      } else {
        console.log(`[${strTime}] [${strStyleTag}] ${strStyleMsg}`)
      }
    }

    const txtFile = `[${strTime}] [${strTag}] ${strMsg}\n`
    if (isHavePathFile === true) {
      if (force == `file` || force == `all`) {
        if (isHaveOvrWriteLog === true) {
          ovrWriteLog({ strTime, strTag, strStyleTag, strMsg, strStyleMsg: strMsg })
        } else {
          appendFile(pathFile, txtFile)
        }
      }
    }
  }

  return {
    info: (msg: string) => renderLog(`INFO`, msg, green, undefined),
    warn: (msg: string) => renderLog(`WARN`, msg, yellow, yellow),
    error: (msg: string) => renderLog(`ERROR`, msg, red, red),
    success: (msg: string) => renderLog(`SUCCESS`, msg, green, green),
    failed: (msg: string) => renderLog(`FAILED`, msg, red, red),
    fail: (msg: string) => renderLog(`FAIL`, msg, red, red),
    debug: (msg: string) => renderLog(`DEBUG`, msg, cyan, cyan),
    trace: (msg: string) => renderLog(`TRACE`, msg, blue, blue),
    fatal: (msg: string) => renderLog(`FATAL`, msg, red, bgRed),
    custom: (tag: string, msg: string, colorUniqTag = bold, colorMsg = white) => renderLog(tag, msg, colorUniqTag, colorMsg),
    _listColor: chalk,
    _renderLog: renderLog
  }
}

export default initNew
