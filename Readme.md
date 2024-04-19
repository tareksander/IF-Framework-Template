# IF Framework Template

Template project for using [`@if-framework/framework`](https://github.com/tareksander/IF-Framework/tree/main).



## Usage

### CLI

Install the IFF CLI with `npm i -g @if-framework/cli` and create a new project from the template with `iff new <directory> [URL]` where `<directory>` is the name of the new directory the project will be created in and `[URL]` an optional URL to a git repository [cloned from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

When using your own repository, you can commit and push changes without further configuration. When using the template repository directly, you have to configure the git remote yourself.


### Manually

The CLI asks you for some details and replaces placeholders in the template after cloning:

- `@@@TITLE@@@`: The story title.
- `@@@DESC@@@`: Story description, included in the PWA manifest.
- `@@@DIR@@@`: The directory name, used as the name in `package.json`.

This is easily done with the "Replace in Files" feature of VSCode (standard hotkey: Ctrl + Shift + H).


## Recommended Editor

The recommended editor is [VSCode](https://code.visualstudio.com/) with the following extensions:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

Workspace recommendations are configured, so when you open the folder in VSCode you should get a notification prompting you to install the recommended extensions.


## Post-Setup

After initializing the template you should:

- Edit `icon-256x256.png` to an appropriate icon for your story.
- Read the [IF Framework Readme](https://github.com/tareksander/IF-Framework/tree/main) if you're unfamiliar with it.
    - Also check out the [commented example project](https://github.com/tareksander/IF-Framework/tree/main/example) in that case.
- Read the rest of this Readme for some further design decisions made in this template.
- Replace or remove this Readme file if you don't need the information for future reference anymore.



## Build Process

To build the story, [Webpack](https://github.com/webpack/webpack) is used as the module bundler/build tool. See the `webpack.config.js` in the example for an explanation of the used loaders and plugins.

## Offline Availability & Installable PWA

This template is configured such that the built site is [installable as a PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing) in supported browsers (most except Firefox Desktop).

All assets that have to be cached for offline use have to be listed in `config.json`. For each update you also have to increase the version field, so the site will know there was an update and download it.

For ease of development the service worker is not registered in development builds, so you can test the site locally while rapidly changing it. To test the production builds, you can open the `index.html` in the `dist` folder with the live preview extension after building, open the page, wait a bit for the service worker to cache it and then stop the live server and try to play.


## Editing

The source files are contained in the `src` directory:

- `globals.ts`: use the predefined function to access the engine globals with type safety. To add a new global, edit the `Globals` interface and add an assignment in the `globals` function to set the initial value.
- `index.ts`: Here is the start point of the code. The engine configuration values that are not Svelte stores should be set before calling `engine.initHistory`.
- `styles.scss`: This files contains global styles in the SCSS language (a superset of CSS, so you can treat it as such if you don't know/need SCSS).
- `passages/`: Here are the passages of the story. You can mix and match Markdown and Svelte component passages.

