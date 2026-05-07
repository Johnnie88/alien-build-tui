#!/bin/bash

# Alien-Build-TUI Scaffolding Script

set -e

function create_module() {
    local module_name=$1
    if [ -z "$module_name" ]; then
        echo "Error: Module name is required."
        exit 1
    fi

    echo "Scaffolding new module: $module_name..."
    mkdir -p "cli/modules/$module_name"
    cat <<EOF > "cli/modules/$module_name/index.tsx"
import React from 'react';
import { Text } from 'ink';

export const $module_name = () => (
    <Text>Module: $module_name</Text>
);
EOF
    echo "Module '$module_name' created successfully."
}

# Main script logic
if [ "$1" == "create" ]; then
    create_module "$2"
else
    echo "Usage: ./scripts/scaffold.sh create <module-name>"
fi
