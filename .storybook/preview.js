import "../src/components/toujou-example/toujou-example";
import "../src/components/toujou-topbar/toujou-topbar";
import "../src/styles/globalStyles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'fullscreen' // This removes that padding on the storybook canvas
}