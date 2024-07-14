// CommonJs (require)
const { loggingPretty } = require(`..`);

const log = loggingPretty(`./test/store.log`, `all`, `YYYY-MM-DD HH:mm:ss`, ({ strTime, strTag, strStyleTag, strStyleMsg }) => {
  // override render log
  if (strTag == `INFO`) console.log(`[${strTime}] ${strStyleTag}: -> -> ${strStyleMsg}`);
  if (strTag == `FAIL`) console.log(`[${strTime}] ${strStyleTag}: x x ${strStyleMsg}`);
});

log.info(`info task`);
log.fail(`fail task`);
