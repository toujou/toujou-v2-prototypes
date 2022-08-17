// import { themes } from '@storybook/theming';
import { addons } from "@storybook/addons";
import toujouTheme from "./toujouTheme";
import { hidePagesFromSidebar } from "./configUtils/hidePagesFromSidebar.js";

/* Hide some pages from the sidebar, for instance the modal content page */
hidePagesFromSidebar();

/* Add custom theme settings */
addons.setConfig({
    theme: toujouTheme,
})