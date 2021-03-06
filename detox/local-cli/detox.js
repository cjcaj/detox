#!/usr/bin/env node

const program = require('commander');

program
  .arguments('<process>')
  .command('test', 'Initiating your test suite')
  .command('build', `[convince method] Run the command defined in 'configuration.build'`)
  .command('run-server', 'Starts a standalone detox server')
  .command('init', 'Create initial e2e tests folder')
  .parse(process.argv);
