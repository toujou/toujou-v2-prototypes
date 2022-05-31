# The storybook build has a bug with resolving relative / absolute paths
# The created "storybook-static/iframe.html" has a couple of absolute paths that need to be relative,
#   so we add the missing "." with this script

# Variables
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'
IFRAME_PATH=storybook-static/iframe.html

echo "${PURPLE}Starting storybook fix...${NOCOLOR} 👷"

# Replace absolute path for the src
sed -i '' 's/src="/src="./g' ${IFRAME_PATH}

# Replace absolute path for the href
sed -i '' 's/ href="/ href="./g' ${IFRAME_PATH}

# Output success message
echo "${GREEN}Successfully patched the iframe!${NOCOLOR} 🎉"
