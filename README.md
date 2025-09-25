# TOUJOU STORYBOOK FOR THEME-KOJO
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

## Github page
We can deploy storybook to a [github page](https://toujou.github.io/toujou-v2-prototypes/). Followed [this tutorial](https://medium.com/swlh/how-to-deploy-storybook-to-github-pages-4894097d49ab)

> `npm run deploy::full` works well! It builds and deploys to github in 1 step!

# Troubleshooting
1. `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS` error when running the `npm run sb` command or `npm run deploy:full`

Please try `nvm use` and `npm install` before running the `npm run sb` command again
