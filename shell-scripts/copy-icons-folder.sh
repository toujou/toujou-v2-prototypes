# Copy the theme's assets (icons, images) into the places the built CSS/storybook serve them from.
#
# The default theme matches Vite's FALLBACK_THEME ('kojo'), so non-flagged builds behave the same.
# The icon token urls (e.g. url('../../../../assets/themes/kojo/icons/...')) resolve relative to the
# built CSS, which from dist/themes/<theme>/css lands on dist/assets/themes/<theme>/… Thus we copy
# assets/themes/${THEME} into dist/assets and storybook-static/assets (mirroring the repo-root assets/
# served via .storybook/main.js staticDirs).
#
# A theme with no assets tree is skipped (currently only kojo ships assets).

set -e

PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'
THEME="${VITE_THEME:-kojo}"
ORIGINAL_LOCATION="assets/themes/${THEME}"
STORYBOOK_PARENT="storybook-static/assets/themes"
DIST_PARENT="dist/assets/themes"
echo "📸 ${PURPLE}Start copying assets for theme '${THEME}'...${NOCOLOR}"

if [ ! -d "${ORIGINAL_LOCATION}" ]; then
  echo "${PURPLE}   Theme '${THEME}' has no assets at '${ORIGINAL_LOCATION}' — skipping.${NOCOLOR}"
  echo "🎉 ${GREEN}Done copying assets!${NOCOLOR}"
  exit 0
fi

mkdir -p "${STORYBOOK_PARENT}"
mkdir -p "${DIST_PARENT}"
cp -R "${ORIGINAL_LOCATION}" "${STORYBOOK_PARENT}/"
cp -R "${ORIGINAL_LOCATION}" "${DIST_PARENT}/"

# Output success message
echo "🎉 ${GREEN}Successfully copied assets for theme '${THEME}'!${NOCOLOR}"
