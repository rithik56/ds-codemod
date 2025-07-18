#!/bin/bash

set -e  # Exit immediately on any error
set -o pipefail

echo "🚀 Starting MUI update process..."

# Step 1: Fetch from both remotes
echo "📥 Fetching remotes..."
git fetch mui
git fetch mui-x

# Step 2 & 3: Checkout codemod folders from remote branches
echo "📦 Checking out packages..."
git checkout mui/master -- packages/mui-codemod
git checkout mui-x/master -- packages/x-codemod

# Step 4 & 5: Sync codemods into local src/
echo "🔄 Syncing codemod files..."
rsync -av packages/mui-codemod/src/ src/
rsync -av packages/x-codemod/src/ src/

# Step 6: Remove fetched codemod folders
echo "🧹 Cleaning up..."
rm -rf packages

# Step 7: Run rename logic
echo "🚚 Running codemod rename script..."
node mui-rename.js

echo "✅ MUI update completed successfully!"