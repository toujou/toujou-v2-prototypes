# TOUJOU 2.0 STORYBOOK

This project uses:
- [VITEJS](https://vitejs.dev/).
- [Storybook](https://storybook.js.org/)
- [Storybook-deployer](https://github.com/storybookjs/storybook-deployer)
- [vitest](https://github.com/vitest-dev/vitest#readme)

## Scripts

- `npm run dev` runs the app (`index.html` file) in dev mode, which import the `.ts` files, hast Hot Module Replacement, ...
- `npm run build` build the project files
- `npm run sb` opens a Storybook instance where you can see all the components
- `npm run build-sb` build the project files so they can be displayed on Storybook. This will also automatically run the `postbuild-sb` task
- `npm run postbuild-sb` run a couple of tasks needed to make the static storybook work
- `npm run build-fix` change absolute paths to relative paths on the storybook-static/iframe.html file
- `npm run copy-icons-folder` copy the icons folder to the storybook-static/assets folder
- `npm run deploy-sb` deploy storybook to github pages
- `npm run deploy-full` build and deploy to github
- `npm run test` run the js tests

## How to create a new webcomponent
1. Create a new component folder inside `src`, like `toujou-example`
2. Create the `.ts` file for your component, like `toujou-example.ts`
3. Create the component
4. Add the entry for the component on the `vite.config.ts` file
5. Create a story file for the component, like `toujou-example.story.ts`
6. Import the component on `.storybook/preview.js`
7. [optional] Add the component to the `index.html` file. Useful to for local development
8. run `npm run build` and `npm run build-storybook`

## How to create stories for plain html elements
1. Create a new story files on `src/stories`, like `src/stories/button.stories.ts`

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

# Badges addon
We use the [Badges Addon](https://storybook.js.org/addons/@geometricpanda/storybook-addon-badges) to help us track the state of each story