# wdio-saucedemo-automated-tests

UI automation framework for the following E-commerce Website (https://www.saucedemo.com/) using WebdriverIO (WDIO).

## 1 Framework Overview

This project automates the main user actions such as login, adding products to cart, completing purchase.

### Target

Readable and reusable test code
Local and CI execution using Jenkins file

## 2 Technology used

- Node.js
- WebdriverIO
- Cucumber
- Page Object Model (POM)
- Assertion (expect-webdriverio)
- Reporter(s) (spec/allure)

## 3 Project Structure

```text
c:\sauceDemo
├── src
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── features/
│   └── helpers/
│   ├── pages/
│   ├── selectors/
│   └── steps/
├── wdio.conf.js
├── package.json
└── README.md
```

## 4 Test Architecture

The framework follows the below architecture:

1. **Features**  
   Reads like business behavior (Given/When/Then) gherkin language

2. **Page Objects**  
   UI actions  
   Example methods: `login(username, password)`, `clickRemoveFromCartButton(productName)`......

3. **Selectors**  
   All selectors stored used in tests

4. **WDIO Config**  
   Controls:
   - browser/platform
   - parallelism
   - retries
   - reporters
   - hooks (`before`, `afterTest`, etc.)

## 5 Design Patterns Used

### 5.1 Page Object Model (POM)

- Centralizes actions in page classes
- Reduces duplication
- Makes tests easier to maintain when UI changes

### 5.2 DRY (Don’t Repeat Yourself)

- Common flows abstracted into reusable methods/helpers

### 5.3 Config Execution

- Environment and execution behavior configured in `wdio.conf.js` and environment variables

## 6 Limitations

- Dynamic UI/network delays may cause flakiness.
- Demo environment can impact expected outcomes due to possible issues.
- Tests currently run only in Chrome browser.

## 7 Setup Instructions (Windows)

## 7.1 Prerequisites

- Install Node.js: https://nodejs.org/
- Verify installation:
  ```
  node -v
  npm -v
  ```

## 7.2 Install dependencies

From project root (`c:\sauceDemo`):

```
npm install
```

## 8 How to Run Tests

## Run all tests

```
npm wdio run .\wdio.conf.js
```

## Run using npm script (defined in package.json)

```
npm run test:saucedemo
```

## Run a specific feature file

```
npm run test:saucedemo -- --spec featureName.feature
```

## 9 Reporting

Depending on configured reporters:

- Console output (`spec` reporter)
- `./allure-results` (Allure)

Example

```
npm run allure:generate  ('defined in package.json')
npm run allure:open
```

## 10 Possible Improvements

- Add linting + formatting (ESLint/Prettier)
- Add test strategy (`smoke`, `regression`)
- Add retry/flaky-test tracking

## 11 Quick Start

```
cd c:\sauceDemo
npm install
npx wdio run .\wdio.conf.js
```

## 12 Jenkins Pipeline (CI)

This project includes a `Jenkinsfile` to run UI tests in CI.

### Pipeline stages

1. Checkout  
   Pulls source code from SCM.

2. Install dependencies
   Runs:

   ```
   npm ci
   ```

3. Clean Allure reports  
   Runs:
   ``
   npm run clean:allure

   ```

   ```

4. Run tests
   Runs:

   ```
   npm run wdio
   ```

   If tests fail, build is marked **UNSTABLE** (not failed immediately), so reporting still runs.

5. Generate Allure Report  
   Runs:
   ```
   npm run allure:generate
   ```

### Jenkins setup requirements

- NodeJS Plugin (tool name: `node20`)
- Allure Jenkins Plugin
- Pipeline job pointing to repository root (where `Jenkinsfile` is located)
