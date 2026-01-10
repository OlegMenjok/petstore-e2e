import chalk from 'chalk';
import winston from 'winston';

function colorize(log) {
  switch (log.level) {
    case 'error':
      return globalThis.testTitle
        ? `[${chalk.magenta(globalThis.testTitle)}]-${log.timestamp}-${log.level}: ${chalk.red(log.message)}`
        : `${log.timestamp}-${log.level}: ${chalk.red(log.message)}`;
    case 'info':
      return globalThis.testTitle
        ? `[${chalk.magenta(globalThis.testTitle)}]-${log.timestamp}-${log.level}: ${chalk.green(log.message)}`
        : `${log.timestamp}-${log.level}: ${chalk.green(log.message)}`;
    case 'warn':
      return globalThis.testTitle
        ? `[${chalk.magenta(globalThis.testTitle)}]-${log.timestamp}-${log.level}: ${chalk.yellow(log.message)}`
        : `${log.timestamp}-${log.level}: ${chalk.yellow(log.message)}`;
    default:
      throw Error(`Log level: ${log.level} does not exist, try: info, error, warn`);
  }
}

function sendToReportPortal(level, message) {
  if (globalThis.tempId && globalThis.rpClient) {
    switch (level) {
      case 'error':
        globalThis.rpClient.sendLog(globalThis.tempId, { level: 'ERROR', message });
        break;
      case 'info':
        globalThis.rpClient.sendLog(globalThis.tempId, { level: 'INFO', message });
        break;
      case 'warn':
        globalThis.rpClient.sendLog(globalThis.tempId, { level: 'WARN', message });
        break;
      default:
        throw Error(`Log level: ${level} does not exist, try: info, error, warn`);
    }
  }
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY.MM.DD HH:mm:ss' }),
    winston.format.printf((log) => `${log.timestamp}-${log.level}: ${log.message}`),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY.MM.DD HH:mm:ss' }),
        winston.format.printf((log) => colorize(log)),
      ),
    }),
  ],
});

function info(message) {
  logger.info(message);
  sendToReportPortal('info', message);
  return message;
}

function error(message) {
  logger.error(message);
  sendToReportPortal('error', message);
  return message;
}

function warn(message) {
  logger.warn(message);
  sendToReportPortal('warn', message);
  return message;
}

export { info, error, warn };
