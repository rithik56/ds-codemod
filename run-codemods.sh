#!/bin/bash

# Check if user provided the target path
if [ -z "$1" ]; then
  echo "Error: Please provide the target path."
  echo "Usage: ./run-codemods.sh <target-path>"
  exit 1
fi

TARGET_PATH="$1"

# List of codemod scripts
codemodScripts=(
  "deprecations/dialog-props"
  "deprecations/all"
  "v6.0.0/system-props"
  "v6.0.0/list-item-button-prop"
  "v7.0.0/input-label-size-normal-medium"
  "v7.0.0/grid-props"
  "v7.0.0/pickers/preset-safe"
  "v8.0.0/charts/preset-safe"
)

# Loop through each codemod and execute the Node.js codemod script
for codemod in "${codemodScripts[@]}"; do
  echo "Running codemod: $codemod on $TARGET_PATH"
  npm run codemod "$codemod" "$TARGET_PATH"
  
  if [ $? -ne 0 ]; then
    echo "Codemod $codemod failed. Stopping the script."
    exit 1
  fi

  echo "Finished codemod: $codemod"
done

echo "All codemods applied successfully."
