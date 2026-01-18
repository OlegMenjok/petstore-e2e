# 🐾 PetStore E2E Tests

Automated E2E tests for [Swagger PetStore API](https://petstore.swagger.io/)

[![E2E Tests](https://github.com/OlegMenjok/petstore-e2e/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/OlegMenjok/petstore-e2e/actions/workflows/e2e-tests.yml)

## 📋 About

This project contains automated tests for PetStore API functionality, including:

- ✅ Creating new pets
- ✅ Getting pet information
- ✅ Updating data
- ✅ Deleting records
- ✅ API response validation

**Tested API:** `https://petstore.swagger.io/v2`

## 🛠 Tech Stack

- **Node.js** - runtime environment
- **TypeScript** - programming language
- **Mocha** - testing framework
- **Chai** - assertion library
- **Superagent** - HTTP client
- **Joi** - schema validation
- **Winston** - logging
- **Faker.js** - test data generation

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/OlegMenjok/petstore-e2e.git
cd petstore-e2e

# Install dependencies
npm install
```

## 🚀 Running Tests

```bash
# Run tests with detailed logging
npm test

# Run tests for CI/CD (without detailed logging)
npm run test-integration

# Run tests sequentially (without parallelization)
npm run test-serial
```

## 📊 Reports

After each run, an xUnit format XML report is generated:

```
.temp/xunit-report.xml
```

## 📱 Telegram Integration

The project supports automatic test results delivery to Telegram.

### Setup

1. **Create Telegram bot:**
   - Open [@BotFather](https://t.me/botfather)
   - Send `/newbot`
   - Follow instructions
   - Save the token

2. **Get Chat ID:**
   - Send `/start` to your bot
   - Delete webhook (if exists):
     ```
     https://api.telegram.org/bot<YOUR_BOT_TOKEN>/deleteWebhook
     ```
   - Get updates:
     ```
     https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
     ```
   - Find `"chat":{"id":123456789}` - this is your Chat ID

3. **Create `.env` file:**

   ```bash
   cp .env.example .env
   ```

4. **Add credentials to `.env`:**
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

### Message Format

```
Backend petstore e2e tests
Tests are passed ✅

Success rate: 100%
Total tests: 3, Passed tests: 3, Failed tests: 0
⏱ Time: 2.5s
```

## 🔄 CI/CD

The project uses GitHub Actions for automated test execution.

### Triggers

- ✅ Push to `main`, `master`, `develop` branches
- ✅ Pull Request to `main`, `master`, `develop` branches
- ✅ Manual run (workflow_dispatch)
- ✅ Scheduled: daily at 6:00 UTC (9:00 Kyiv)

### Telegram Setup for CI/CD

1. Open Settings → Secrets and variables → Actions
2. Add secrets:
   - `TELEGRAM_BOT_TOKEN` - your bot token
   - `TELEGRAM_CHAT_ID` - your chat ID

## 🧹 Code Quality

```bash
# Check formatting
npm run prettier-check

# Auto-format
npm run prettier

# Check ESLint
npm run eslint

# Fix ESLint errors
npm run eslint-fix
```

## 📁 Project Structure

```
petstore-e2e/
├── .github/
│   └── workflows/
│       └── e2e-tests.yml      # GitHub Actions workflow
├── api/                        # API clients
│   ├── petStore.api.ts
│   └── service.api.ts
├── data/                       # Test data
│   ├── httpBody/
│   └── faker.data.ts
├── interfaces/                 # TypeScript interfaces
│   └── IPet.ts
├── test/                       # Tests
│   └── petLifecycle.test.ts
├── utils/                      # Utilities
│   ├── joi.utils.ts
│   ├── log.utils.ts
│   ├── service.utils.ts
│   └── telegram.utils.js
├── .env                        # Environment variables (not in git)
├── .env.example                # Example variables
├── mocharc.js                  # Mocha configuration
├── reporter.config.json        # Reporter configuration
└── send-telegram.js            # Telegram send script
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

ISC

## 👤 Author

**Oleh Menok**

- GitHub: [@OlegMenjok](https://github.com/OlegMenjok)
- Repository: [petstore-e2e](https://github.com/OlegMenjok/petstore-e2e)

---

⭐️ If this project was helpful, give it a star!
