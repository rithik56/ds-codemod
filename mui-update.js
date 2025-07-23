#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const fsExtra = require('fs-extra');

function run(command, options = {}) {
  console.log(`👉 Running: ${command}`);
  execSync(command, { stdio: 'inherit', ...options });
}

function main() {
  try {
    console.log('🚀 Starting MUI update process...');

    // Step 1: Fetch from both remotes
    console.log('📥 Fetching remotes...');
    run('git fetch mui');
    run('git fetch mui-x');

    // Step 2 & 3: Checkout codemod folders
    console.log('📦 Checking out packages...');
    run('git checkout mui/master -- packages/mui-codemod');
    run('git checkout mui-x/master -- packages/x-codemod');

    // Step 4 & 5: Sync codemods into local src/
    console.log('🔄 Syncing codemod files...');
    fsExtra.copySync('packages/mui-codemod/src', 'src', { overwrite: true });
    fsExtra.copySync('packages/x-codemod/src', 'src', { overwrite: true });

    // Step 6: Remove fetched codemod folders
    console.log('🧹 Cleaning up...');
    fsExtra.removeSync('packages');

    // Step 7: Run rename logic
    console.log('🚚 Running codemod rename script...');
    run('node mui-rename.js');

    console.log('✅ MUI update completed successfully!');
  } catch (err) {
    console.error('❌ Error during MUI update process:', err.message);
    process.exit(1);
  }
}

main();
