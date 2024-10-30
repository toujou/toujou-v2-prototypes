// Create "Toujou Theme" globals dropdown on the topbar
import { setThemeStylesheets } from "../configUtils/setThemeStylesheets";

export const decoratorsConfig = [
    (Story, context) => {
        setThemeStylesheets(context);
        return Story();
    },
];
