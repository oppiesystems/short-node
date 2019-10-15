'use strict';

const fetch = require('node-fetch');

Short.DEFAULT_API_HOST = 'short.oppie.io';
Short.DEFAULT_BASE_PATH = '/api';

Short.PACKAGE_VERSION = require('../package.json').version;

function Short(key) {
  if (!(this instanceof Short)) {
    return new Short(key);
  }

  if (!key) {
    throw new Error('No API key provided at instantiation.');
  }

  this._api = {
    url: 'https://' + Short.DEFAULT_API_HOST + Short.DEFAULT_BASE_PATH,
    key: key,
  };
}

/**
 * Parameters for shortening of strings.
 * @typedef {Object} DigestOptions
 * @property {string} content - Raw content to be summarized
 */

/**
 * Parameters for shortening of strings.
 * @typedef {Object} DigestResponse
 * @property {string} digest - Condensed content
 * @property {number} inputLength - Character length of the `content` input
 * @property {number} outputLength - Character length of the `digest` output
 * @property {number} reduction - Fraction of the original character length after condensing
 */

/**
 * Summarizes content provided to it.
 *
 * @param {DigestOptions}
 * @returns {Promise<DigestResponse>}
 */
async function digest({content}) {
  const r = await fetch(`${this._api.url}/digest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': this._api.key,
    },
    body: JSON.stringify({content}),
  });

  return r.json();
}

Short.prototype = {
  digest,
};

module.exports = Short;
module.exports.Short = Short;
