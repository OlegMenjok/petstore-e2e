require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const log = require('./log.utils');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

async function sendTestResults() {
  if (!BOT_TOKEN || !CHAT_ID) {
    log.warn('Telegram credentials not set. Skipping notification.');
    return;
  }

  const bot = new TelegramBot(BOT_TOKEN);
  const reportPath = path.join(__dirname, '../.temp/xunit-report.xml');

  if (!fs.existsSync(reportPath)) {
    log.warn('Report file not found');
    return;
  }

  const reportContent = fs.readFileSync(reportPath, 'utf-8');
  const testsuiteMatch = reportContent.match(
    /<testsuite[^>]*tests="(\d+)"[^>]*failures="(\d+)"[^>]*errors="(\d+)"[^>]*time="([^"]+)"/,
  );

  if (testsuiteMatch) {
    const [, tests, failures, errors, time] = testsuiteMatch;
    const passed = parseInt(tests) - parseInt(failures) - parseInt(errors);
    const failed = parseInt(failures) + parseInt(errors);
    const total = parseInt(tests);
    const successRate = total > 0 ? Math.round((passed / total) * 100) : 0;
    const status = failed > 0 ? '❌' : '✅';

    const message = `*Backend petstore e2e tests*
Tests are ${failed > 0 ? 'failed' : 'passed'} ${status}

Success rate: ${successRate}%
Total tests: ${total}, Passed tests: ${passed}, Failed tests: ${failed}
⏱ Time: ${time}s`;

    await bot.sendMessage(CHAT_ID, message, { parse_mode: 'Markdown' });
    await bot.sendDocument(CHAT_ID, reportPath);
  }
}

module.exports = { sendTestResults };
