//Setting test global variables
if (!window.Promise) {
  window.Promise = require('promise');
}

//Searching for test files and export it for webpack
const context = require.context('../../src', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
