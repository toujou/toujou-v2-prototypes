# Copy the theme's assets (icons, images) into the places the built CSS/storybook serve them from.
#
# The default theme matches Vite's FALLBACK_THEME ('kojo'), so non-flagged builds behave the same.
# The icon token urls (e.g. url('/assets/icons/...')) are served from the server root.
# Dist layout: copy the theme's icons into dist/assets/icons (directly under dist/assets, no theme layer),
# so the built CSS at dist/themes/<theme>/css resolves /assets/icons/… against the dist assets.
# Storybook layout: copy assets/themes/${THEME} into storybook-static/assets (mirroring the repo-root
# assets/ served via .storybook/main.js staticDirs and the /assets/icons staticDirs mount).
#
# The theme CSS carries relative icon urls (url('../assets/icons/...')). Storybook loads that CSS from
# source (see .storybook/config-utils/themes-config.js), so in the static build the browser resolves
# '../assets/icons' relative to the emitted CSS bundle (e.g. storybook-static/assets/<hash>.css) — which
# is storybook-static/assets/icons. Vite normally copies these referenced icons there, but we also copy
# them explicitly so the resolved path always exists. Dev mode serves the same relative icons via the
# staticDirs mount in .storybook/main.js.
#
# A theme with no assets tree is skipped (currently only kojo ships assets).

set -e

PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'
THEME="${VITE_THEME:-kojo}"
ORIGINAL_LOCATION="assets/themes/${THEME}"
STORYBOOK_PARENT="storybook-static/assets/themes"
STORYBOOK_ICONS_PARENT="storybook-static/assets"
DIST_PARENT="dist/assets"
echo "📸 ${PURPLE}Start copying assets for theme '${THEME}'...${NOCOLOR}"

if [ ! -d "${ORIGINAL_LOCATION}" ]; then
  echo "${PURPLE}   Theme '${THEME}' has no assets at '${ORIGINAL_LOCATION}' — skipping.${NOCOLOR}"
  echo "🎉 ${GREEN}Done copying assets!${NOCOLOR}"
  exit 0
fi

mkdir -p "${STORYBOOK_PARENT}"
mkdir -p "${STORYBOOK_ICONS_PARENT}"
mkdir -p "${DIST_PARENT}"
cp -R "${ORIGINAL_LOCATION}" "${STORYBOOK_PARENT}/"
cp -R "${ORIGINAL_LOCATION}/icons" "${STORYBOOK_ICONS_PARENT}/"
cp -R "${ORIGINAL_LOCATION}/icons" "${DIST_PARENT}/"

# Output success message
echo "🎉 ${GREEN}Successfully copied assets for theme '${THEME}'!${NOCOLOR}"
