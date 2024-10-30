import '../src/js/globals';

// ui components
import './componentImports/ui-components';
// kojo specific components
import './componentImports/kojo-components';

// Config
import { parametersConfig } from "./config/parametersConfig";
import { previewConfig } from "./config/previewConfig";
import { decoratorsConfig } from "./config/decoratorsConfig";

// Hacks
import './configUtils/mainNavHack';

// Exports
const preview = previewConfig;
export const parameters = parametersConfig;
export const decorators = decoratorsConfig;

export const tags = ["autodocs"];
export default preview;

// console.clear();
