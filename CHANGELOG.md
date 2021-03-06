# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [5.1.0](https://github.com/medikoo/log-node/compare/v5.0.0...v5.1.0) (2019-03-19)

### Features

-   dim log timestamps ([f85a103](https://github.com/medikoo/log-node/commit/f85a103))

# [5.0.0](https://github.com/medikoo/log-node/compare/v4.0.0...v5.0.0) (2019-03-19)

### Features

-   move from util to lib ([cf7ce81](https://github.com/medikoo/log-node/commit/cf7ce81))
-   move from util to lib ([f8f93c5](https://github.com/medikoo/log-node/commit/f8f93c5))
-   move from util to lib ([c7e3de5](https://github.com/medikoo/log-node/commit/c7e3de5))
-   move from util to lib ([f9fb731](https://github.com/medikoo/log-node/commit/f9fb731))
-   move from util to lib ([0d12bfa](https://github.com/medikoo/log-node/commit/0d12bfa))
-   upgrde to log v5 ([2018502](https://github.com/medikoo/log-node/commit/2018502))

### BREAKING CHANGES

-   Move util/resolve-format-parts.js to lib/resolve-format-parts.js
-   Move util/level-prefixes.js to lib/level-prefixes.js
-   Move util/get-namespace-prefix.js into lib/get-namespace-prefix.js
-   Move util/format.js into lib/format.js
-   util/format-event-message.js was moved to lib/format-event-message.js
-   Switch from log v4 to logv5

# [4.0.0](https://github.com/medikoo/log-node/compare/v3.2.1...v4.0.0) (2019-03-18)

### Bug Fixes

-   ensure private modules are in lib/private ([73b75c5](https://github.com/medikoo/log-node/commit/73b75c5))

### Code Refactoring

-   upgrade to log v4 ([703815b](https://github.com/medikoo/log-node/commit/703815b))

### Features

-   support LOG_TIME ([e750b82](https://github.com/medikoo/log-node/commit/e750b82))

### BREAKING CHANGES

-   Switch to log v4

<a name="3.2.1"></a>

## [3.2.1](https://github.com/medikoo/log-node/compare/v3.2.0...v3.2.1) (2018-11-29)

<a name="3.2.0"></a>

# [3.2.0](https://github.com/medikoo/log-node/compare/v3.1.1...v3.2.0) (2018-11-29)

### Features

-   rename to log-node ([e4209d9](https://github.com/medikoo/log-node/commit/e4209d9))

<a name="3.1.1"></a>

## [3.1.1](https://github.com/medikoo/log4-node/compare/v3.1.0...v3.1.1) (2018-10-02)

### Bug Fixes

-   do not wrap raw strings that contain ansi codes ([1027877](https://github.com/medikoo/log4-node/commit/1027877))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/medikoo/log4-node/compare/v3.0.0...v3.1.0) (2018-10-02)

### Features

-   format util ([5d2d8fc](https://github.com/medikoo/log4-node/commit/5d2d8fc))
-   seclude inspectDepth resolution to lib ([073351d](https://github.com/medikoo/log4-node/commit/073351d))
-   seclude partsResolver util ([9a9b101](https://github.com/medikoo/log4-node/commit/9a9b101))
-   support raw string placeholder variant ([f6fd4ac](https://github.com/medikoo/log4-node/commit/f6fd4ac))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/medikoo/log4-node/compare/v2.3.1...v3.0.0) (2018-09-28)

### Features

-   rename to utils/format-event-message.js ([d3a78f5](https://github.com/medikoo/log4-node/commit/d3a78f5))
-   support default namespace ([5e3c931](https://github.com/medikoo/log4-node/commit/5e3c931))

### BREAKING CHANGES

-   utils/format-message.js was renamed to utils/format-event-message.js

<a name="2.3.1"></a>

## [2.3.1](https://github.com/medikoo/log4-node/compare/v2.3.0...v2.3.1) (2018-08-06)

### Bug Fixes

-   do not decorate placeholders with message decorators ([dcaa9ca](https://github.com/medikoo/log4-node/commit/dcaa9ca))

<a name="2.3.0"></a>

# [2.3.0](https://github.com/medikoo/log4-node/compare/v2.2.0...v2.3.0) (2018-06-05)

### Features

-   show warning logs in yellow when colors enabled ([fe7564b](https://github.com/medikoo/log4-node/commit/fe7564b))

<a name="2.2.0"></a>

# [2.2.0](https://github.com/medikoo/log4-node/compare/v2.1.1...v2.2.0) (2018-06-05)

### Features

-   make error colors red when colors are enabled ([9682138](https://github.com/medikoo/log4-node/commit/9682138))
-   Support logger.messageContentDecorator function ([f194169](https://github.com/medikoo/log4-node/commit/f194169))

<a name="2.1.1"></a>

## [2.1.1](https://github.com/medikoo/log4-node/compare/v2.1.0...v2.1.1) (2018-06-05)

<a name="2.1.0"></a>

# [2.1.0](https://github.com/medikoo/log4-node/compare/v2.0.0...v2.1.0) (2018-06-04)

### Bug Fixes

-   use less confusing "i" symbol for notice ([8c545f5](https://github.com/medikoo/log4-node/commit/8c545f5))

### Features

-   improve string formatting ([7d2ea73](https://github.com/medikoo/log4-node/commit/7d2ea73))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/medikoo/log4-node/compare/v1.0.0...v2.0.0) (2018-06-01)

### BREAKING CHANGES

-   Drop support for log4 v2
-   Drop support for Node.js v4
-   Switch formatter to rely on [sprintf-kit](https://github.com/medikoo/sprintf-kit) instead of native Node.js one
-   Drop support for LOG4_COLORS env var (instead DEBUG_COLORS should be used)
-   Change presentation of prefixes

-   Hndler is exposed as a function and needs to be invoked:

```javascript
require("log4-nodejs")();
```

<a name="1.0.0"></a>

# 1.0.0 (2018-03-22)
