import { addons } from '@storybook/manager-api';
import toujouTheme from "./toujouTheme";

/* Add custom theme settings */
addons.setConfig({
    theme: toujouTheme,
})
