// CommonJs (require)
const { default: init } = require("..");
const log = init(null, "anything", true);

log.info("hello world");
