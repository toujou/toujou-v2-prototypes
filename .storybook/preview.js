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
  badgesConfig: {
    beta: {
      styles: {
        backgroundColor: '#7a17da',
        borderColor: '#550e96',
        color: '#e3d4ef',
      },
      title: 'In progress',
    },
  },
  // layout: 'fullscreen' // This removes that padding on the storybook canvas
}