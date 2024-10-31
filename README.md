# TOUJOU 2.0 STORYBOOK
Components and styles for the kojo theme

## Scripts

- `npm run dev` runs the app (`index.html` file) in dev mode, which import the `.ts` files, hast Hot Module Replacement, ...
- `npm run build` build the project files
- `npm run sb` opens a Storybook instance where you can see all the components
- `npm run build:sb` build the project files so they can be displayed on Storybook. This will also automatically run the `postbuild-sb` task
- `npm run postbuild:sb` run a couple of tasks needed to make the static storybook work
- `npm run build:fix` change absolute paths to relative paths on the storybook-static/iframe.html file
- `npm run copy-icons-folder` copy the icons folder to the storybook-static/assets folder
- `npm run deploy:sb` deploy storybook to github pages
- `npm run deploy:full` build and deploy to github
- `npm run test` run the js tests

## How to add changes for Kojo Theme
1. `nvm use && npm ci`
2. Make desired changes
3. `npm run lint:css`
4. `npm run deploy:full`
5. commit changes
6. Then on Kojo theme:
   6.1. Update changes (JS and CSS) with `nvm use && npm run update:styles`

## How to create a new webcomponent [DEPRECATED: we should use the ui-components package!!!]
1. Create a new component folder inside `src`, like `toujou-example`
2. Create the `.ts` file for your component, like `toujou-example.ts`
3. Create the component
4. Add the entry for the component on the `vite.config.ts` file
5. Create a story file for the component, like `toujou-example.story.ts`
6. Import the component on `.storybook/preview.js`
7. [optional] Add the component to the `index.html` file. Useful to for local development
8. run `npm run build` and `npm run build-storybook`

## How to create stories for plain html elements
1. Create a new story file on `src/stories`, like `src/stories/button.stories.ts`

## Github page
We can deploy storybook to a [github page](https://toujou.github.io/toujou-v2-prototypes/). Followed [this tutorial](https://medium.com/swlh/how-to-deploy-storybook-to-github-pages-4894097d49ab)

This currently doesn't work 100%.
The problem are some relative / absolute paths that aren't correctly resolved during the build

- [Same problem?!](https://github.com/storybookjs/storybook/issues/11694)

The current **solution** is after the `npm run build-sb` command to to add the missing `./` to the iframe links on the `storybook-static/iframe.html` file:


```html
    <!-- around line 370 on the current build -->
    <script type="module" crossorigin src="./assets/iframe.2998cd67.js"></script>
    <link rel="stylesheet" href="./assets/iframe.f0ce4956.css">
```

> `npm run deploy::full` works well! It builds and deploys to github in 1 step!

# Badges addon
We use the [Badges Addon](https://storybook.js.org/addons/@geometricpanda/storybook-addon-badges) to help us track the state of each story

# Troubleshooting
1. `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS` error when running the `npm run sb` command or `npm run deploy:full`

Please try `nvm use` and `npm install` before running the `npm run sb` command again
