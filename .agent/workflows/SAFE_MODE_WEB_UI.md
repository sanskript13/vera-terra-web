---
description: Safe Mode Web UI Development Workflow
---

# SAFE_MODE_WEB_UI Workflow

This workflow ensures safe development practices for Web UI tasks, enforcing strict constraints on destructive commands and requiring detailed reporting.

## Rules

1. **NO DESTRUCTIVE COMMANDS**: The following operations are strictly FORBIDDEN in the terminal:
    - `rm` (remove)
    - `format` (disk formatting)
    - Recursive delete (e.g., `rm -rf`)
    - Any other command that permanently deletes data without easy recovery.

2. **DETAILED REPORTING**: At every step of the process, you MUST provide:
    - **Diff Summary**: A clear explanation of what changed in the code.
    - **File List**: A list of all files affected by the change.

## Workflow Steps

1. **Plan Changes**: Briefly outline the intended changes before executing.
2. **Execute Safe Changes**: Apply changes using non-destructive file editing tools.
3. **Report**: After each step, output the required Diff Summary and File List.
4. **Verify**: Ensure the web UI reflects the changes correctly (dev server check).
