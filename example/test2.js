/**
 * test logger with write to file
 */
const init = require('../index');
const log = init("./test/test2-db.log"); // path your file
log.info("this is information message log");
log.warn("warn message lorem ipsum");
log.error("oops!! found error in function getData");
log.debug("debugging function data start from 1 ~ 5");
log.trace("tracing function data");
log.fatal("unhandleError!! found error in function getData");
log.custom("LOREM", "Lorem Ipsum is simply dummy text of the printing and typesetting industry");
log.custom("Feature CronJob", "syncron data to database success with count data 200");