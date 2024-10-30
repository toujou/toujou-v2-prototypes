const THEME_STYLESHEETS = {
    kojo: '../src/styles/StorybookStyles.css',
    toujou: ''
}

/**
 * Load a stylesheet into the document's head
 * @param theme
 */
const loadStylesheet = (theme) => {
    // Remove existing stylesheet if any
    const existingStylesheet = document.getElementById('theme-stylesheet');
    if (existingStylesheet) {
        existingStylesheet.remove();
    }

    // Create a new link element
    const link = document.createElement('link');
    link.id = 'theme-stylesheet'; // Must have this id
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = THEME_STYLESHEETS[theme];

    document.head.appendChild(link);
    console.log(`%c Appended Stylesheet for the ${theme} theme!`, 'background: #1976D2; color: white;');
};

/**
 * Set the correct stylesheet for each theme
 * @param context
 */
export const setThemeStylesheets = (context) => {
    const { globals } = context;
    loadStylesheet(globals.toujouTheme);
};
