import { addons } from 'storybook/manager-api';
import toujouBranding from "./config-utils/storybook-branding";

/* Add custom theme settings */
addons.setConfig({
    theme: toujouBranding,
})
