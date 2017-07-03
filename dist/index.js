#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _downloadRepo = require('download-repo');

var _downloadRepo2 = _interopRequireDefault(_downloadRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNDERPANTS_REPOSITORY = 'arzafran/underpants';

_yargs2.default.usage('$0 <cmd> [args]').command({
  command: 'init <name>',
  desc: 'Bootstraps a shiny new underpants',
  handler: function handler(argv) {
    initNewProject(argv.name);
  }
}).help().argv;

function initNewProject(name) {
  console.log('Initializing new project ' + name + '...');
  (0, _downloadRepo2.default)(UNDERPANTS_REPOSITORY, { target: name }).then(function () {
    console.log('Done! Now put your clothes.');
  });
}