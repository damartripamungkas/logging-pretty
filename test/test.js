// CommonJs (require)
const { LoggingPretty } = require(`..`);

const log = new LoggingPretty({
  force: `all`,
  pathFile: `./test/store.log`,
  formatTime: `YYYY-MM-DD HH:mm:ss`
});

log._renderLogToConsole = ({ strTime, strTag, strStyleTag, strStyleMsg }) => {
  // override render log
  if (strTag == `INFO`) console.log(`[${strTime}] ${strStyleTag}: -> -> ${strStyleMsg}`);
  if (strTag == `FAIL`) console.log(`[${strTime}] ${strStyleTag}: x x ${strStyleMsg}`);
};

log.info(`info task`);
log.fail(`fail task`);
