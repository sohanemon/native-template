#!/usr/bin/env bash
set -euo pipefail

CSS_FILE="styles/colors.css"

mapfile -t VARS < <(
  sed -n '/:root\s*{/,/}/p' "$CSS_FILE" |
    grep -E '^\s*--[a-z0-9-]+:' |
    sed -E 's/^\s*--([a-z0-9-]+):.*$/\1/'
)

THEME_BLOCK="@theme inline {\n"
for NAME in "${VARS[@]}"; do
  THEME_BLOCK+="  --color-$NAME: var(--$NAME);\n"
done
THEME_BLOCK+="}"

if grep -q '@theme inline' "$CSS_FILE"; then
  awk -v newBlock="$THEME_BLOCK" '
    BEGIN { inBlock = 0 }
    # start of theme block?
    /@theme inline\s*{/ {
      print newBlock
      inBlock = 1
      next
    }
    # end of block?
    inBlock && /^\s*}\s*$/ {
      inBlock = 0
      next
    }
    # skip old block lines
    inBlock { next }
    # everything else prints through
    { print }
  ' "$CSS_FILE" >"${CSS_FILE}.tmp" &&
    mv "${CSS_FILE}.tmp" "$CSS_FILE"
else
  {
    echo
    printf "%b\n" "$THEME_BLOCK"
  } >>"$CSS_FILE"
fi

echo "✅ Updated '$CSS_FILE' with @theme inline mapping."
