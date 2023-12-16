import chalk from 'chalk';

type TypeArgs = string | null | undefined;
/**
 * @param pathFolderLog example "./db.log" if path dont have file, script will create and write new file
 * @returns object
 */
declare const init: (pathFolderLog: TypeArgs, hashTag: TypeArgs, enableConsole?: boolean, clearBeforeStart?: boolean) => {
    info: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;
    success: (msg: string) => void;
    debug: (msg: string) => void;
    trace: (msg: string) => void;
    fatal: (msg: string) => void;
    custom: (tag: string, msg: string, colorTag?: chalk.Chalk, colorMsg?: chalk.Chalk) => void;
    listColor: chalk.Chalk & chalk.ChalkFunction & {
        supportsColor: false | chalk.ColorSupport;
        Level: chalk.Level;
        Color: ("red" | "green" | "yellow" | "cyan" | "blue" | "black" | "magenta" | "white" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright") | ("bgRed" | "bgBlack" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgGray" | "bgGrey" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright");
        ForegroundColor: "red" | "green" | "yellow" | "cyan" | "blue" | "black" | "magenta" | "white" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright";
        BackgroundColor: "bgRed" | "bgBlack" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgGray" | "bgGrey" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright";
        Modifiers: "reset" | "bold" | "dim" | "italic" | "underline" | "inverse" | "hidden" | "strikethrough" | "visible";
        stderr: chalk.Chalk & {
            supportsColor: false | chalk.ColorSupport;
        };
    };
    _renderLog: (tag: string, msg: string, chalkFunc: any, chalkFuncBackground: any) => void;
};

export { init as default };
