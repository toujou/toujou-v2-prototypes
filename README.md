# TOUJOU 2.0 STORYBOOK

This project with build using [VITEJS](https://vitejs.dev/).

We also use [Storybook](https://storybook.js.org/)

## Scripts

- `npm run dev` runs the app (`index.html` file) in dev mode, which import the `.ts` files, hast Hot Module Replacement, ...
- `npm run build` build the project files
- `npm run storybook` opens a Storybook instance where you can see all the components
- `npm run build-storybook` build the project files so they can be displayed on Storybook

## How to create a new component
1. Create a new component folder inside `src`, like `toujou-example`
2. Create the `.ts` file for your component, like `toujou-example.ts`
3. Create the component
4. Add the entry for the component on the `vite.config.ts` file
5. Create a story file for the component, like `toujou-example.story.ts`
6. Import the component on `.storybook/preview.js`
7. [optional] Add the component to the `index.html` file
8. run `npm run build` and `npm run build-storybook`