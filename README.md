# short Node.js Library

Access to the [short API](https://short.oppie.io) from applications written in Node.js.

## Documentation

See the [API specification](https://docs.short.oppie.io).

## Installation

Install the package with the preferred package manager.

```bash
yarn add @oppie/short
```

--or--

```bash
npm install @oppie/short --save
```

## Usage

Within four lines of code, content can be condensed and further implemented in an application.

```js
// Require the short library with an API key.
const short = require('@oppie/short')('<API_KEY>');

// Create a new message containing the content to be condensed.
const msg = await short.digest({
  content: 'Lorem ipsum dolor sit amet, elit purus eros id vitae sed blandit. Risus dui dui, vel vehicula erat sem...'
});

/**
 *   msg = {
 *     digest: 'Risus dui dui, vel vehicula erat sem...',
 *     inputLength: 270,
 *     outputLength: 123,
 *     reduction: 0.5444444444444445
 *   }
 */
```

## Contributions

Contributions are welcomed at any time via pull request.
