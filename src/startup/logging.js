const config = require("config");

const log4js = require("log4js");
const logger = log4js.getLogger();

module.exports = () => {
  logger.level = config.has("logLevel") ? config.get("logLevel") : "debug";
  global.logger = logger;
};
