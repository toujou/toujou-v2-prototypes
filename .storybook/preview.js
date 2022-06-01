import "../src/components/toujou-topbar/toujou-topbar";
import "../src/components/toujou-breadcrumb/toujou-breadcrumb";
import "../src/styles/StorybookStyles.css";
import { badgeCustomConfig } from "./badgeCustomConfig.js";

// const toujouViewports = {
//   kindleFire2: {
//     name: 'Kindle Fire 2',
//     styles: {
//       width: '600px',
//       height: '963px',
//     },
//   },
//   kindleFireHD: {
//     name: 'Kindle Fire HD',
//     styles: {
//       width: '533px',
//       height: '801px',
//     },
//   },
//   toujouMobile: {
//     name: 'Toujou Mobile',
//     styles: {
//       width: '640px',
//       height: '801px',
//     },
//   },
// }

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  badgesConfig: badgeCustomConfig,
  // viewport: {
  //   viewports: toujouViewports
  // },
  // layout: 'fullscreen' // This removes that padding on the storybook canvas
}