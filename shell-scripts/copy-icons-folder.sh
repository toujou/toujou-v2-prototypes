# To hack / fix the problem with the incorrect assets folder
#   we copy the icons folder to the storybook-static folder after the build

# Variables
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'
ORIGINAL_LOCATION=assets/icons
DESTINATION_LOCATION=storybook-static/assets
echo "${PURPLE}Starting copying the icons folder...${NOCOLOR} 📸"

cp -R ${ORIGINAL_LOCATION} ${DESTINATION_LOCATION}

# Output success message
echo "${GREEN}Successfully copied the icons folder!${NOCOLOR} 🎉"
