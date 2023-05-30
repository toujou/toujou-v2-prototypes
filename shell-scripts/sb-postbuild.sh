# Variables
PURPLE='\033[0;35m'
BLUE='\033[0;31m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'
IFRAME_PATH=storybook-static/iframe.html

echo "👷 ${PURPLE}Starting post build patches...${PURPLE}"

##############################   RELATIVE PATHS   ###########################################
# The storybook build has a bug with resolving relative / absolute paths
# The created "storybook-static/iframe.html" has a couple of absolute paths that need to be relative,
#   so we add the missing "." with this script

# Replace absolute path for the src
#sed -i '' 's/src="/src="./g' ${IFRAME_PATH}

# Replace absolute path for the href
#sed -i '' 's/ href="/ href="./g' ${IFRAME_PATH}


##############################   CREATE .nojekyll FILE   ###########################################
# When we ploy to github pages there is a problem because files starting with _ are ignored
# There is a "hack" like mentioned here: https://github.com/orgs/community/discussions/23166
# If we create a .nojekyll empty file on the root, it seems to work

NOJEKYLL_FILE_PATH=storybook-static/.nojekyll

touch ${NOJEKYLL_FILE_PATH}
echo "${PURPLE}   1. Created .nojekyll file on storybook-static folder${PURPLE}"

# Output success message
echo "🎉 ${GREEN}Successfully run post build patches!${NOCOLOR}"
