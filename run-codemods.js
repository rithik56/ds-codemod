#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

function run(command) {
  console.log(`👉 Running: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('❌ Error: Please provide the target path.');
    console.log('Usage: node run-codemods.js <target-path>');
    process.exit(1);
  }

  const targetPath = args[0];

  const codemodScripts = [
    'deprecations/all',
    'v6.0.0/system-props',
    'v6.0.0/list-item-button-prop',
    'v7.0.0/input-label-size-normal-medium',
    'v7.0.0/grid-props',
    'v7.0.0/pickers/preset-safe',
    'v8.0.0/charts/preset-safe'
  ];

  for (const codemod of codemodScripts) {
    console.log(`🚀 Running codemod: ${codemod} on ${targetPath}`);

    try {
      run(`npm run codemod "${codemod}" "${targetPath}"`);
      console.log(`✅ Finished codemod: ${codemod}`);
    } catch (err) {
      console.error(`❌ Codemod ${codemod} failed. Stopping the script.`);
      process.exit(1);
    }
  }

  console.log('🎉 All codemods applied successfully.');
}

main();