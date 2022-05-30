import "../src/components/toujou-topbar/toujou-topbar";
import "../src/components/toujou-breadcrumb/toujou-breadcrumb";
import "../src/styles/StorybookStyles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  // layout: 'fullscreen' // This removes that padding on the storybook canvas
}