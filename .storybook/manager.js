import { addons } from 'storybook/manager-api';
import toujouBranding from "./configUtils/storybookToujouBranding";

/* Add custom theme settings */
addons.setConfig({
    theme: toujouBranding,
})
