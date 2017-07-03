#!/usr/bin/env node
import yargs from 'yargs';
import downloadRepo from 'download-repo';

const UNDERPANTS_REPOSITORY = 'arzafran/underpants';

yargs
  .usage('$0 <cmd> [args]')
  .command({
    command: 'init <name>',
    desc: 'Bootstraps a shiny new underpants',
    handler: (argv) => {
      initNewProject(argv.name);
    }
  })
  .help()
  .argv;

function initNewProject(name) {
  console.log(`Initializing new project ${name}...`);
  downloadRepo(UNDERPANTS_REPOSITORY, { target: name })
    .then(() => {
      console.log('Done! Now put your clothes.');
    });
}
