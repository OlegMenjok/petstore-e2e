const chalk = require('chalk');
const winston = require('winston');

function colorize(log) {
  switch (log.level) {
    case 'error':
      return `${log.timestamp}-${log.level}: ${chalk.red(log.message)}`;
    case 'info':
      return `${log.timestamp}-${log.level}: ${chalk.green(log.message)}`;
    case 'warn':
      return `${log.timestamp}-${log.level}: ${chalk.yellow(log.message)}`;
    default:
      throw Error(`Log level: ${log.level} does not exist`);
  }
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY.MM.DD HH:mm:ss' }),
    winston.format.printf((log) => colorize(log)),
  ),
  transports: [new winston.transports.Console()],
});

module.exports = {
  info: (msg) => logger.info(msg),
  warn: (msg) => logger.warn(msg),
  error: (msg) => logger.error(msg),
};
