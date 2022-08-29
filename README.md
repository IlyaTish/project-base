# Project Base

<strong>Project Base</strong> — basic pug template for lightning-fast layout ⚡⚡⚡

### Running the project (yarn/npm commands)

1. `yarn install`
2. `gulp`

### Project structure

`src/assets` - all project assets (styles, scripts, pictures, fonts, etc.). They are copied to the `dist/assets` folder, with preliminary parsing of pug templates, with minification and compilation of styles, as well as with a transpiler (babel), minification of scripts and image compression.<br><br>
Here are:
- `sass` folder with main `style.sass` - project file with @import styles of all necessary blocks and fonts
- the `js` folder with the main `*.js` - project files with require scripts of all the necessary blocks (using the plugin syntax [gulp-include](https://www.npmjs.com/package/gulp-include#include-directives))
- folder `blocks` - blocks of pug templates, which are connected by include to templates and pages

To group blocks for other pages, it is recommended to use the `@` prefix with the page name, for example, if the project has a `about` page, the blocks can be put into the `@about` folder.

## Assembly logic
###PUG
1. The builder passes the pug files in the `src` folder through the Pug template engine.
2. When `extends` is mentioned, processing of the template from `template.pug` is enabled.
3. In the template, when `include` is found, the block template from the specified folder is parsed.
4. The compiled html files from the `src` folder are copied to the `dist` folder.

### Styles
1. The builder passes sass files from the `src/assets` folders through the SASS templating engine.
1. Files with an underscore '_' specified with `@import` are included and compiled. Files without underscores are compiled automatically in alphabetical order.
1. Copy compiled css files to `dist/assets/css`.

### Images
* Files from `src/assets/blocks/*/img`, `src/assets/img` folders are copied to the `dist/assets/img/*` folder (block images are copied to the block folder).

### Scripts
1. The builder passes js files from the `src/assets/js` folder through the `gulp-include` plugin.
2. Babel - rewrites the code of the modern standard Javascript (ES2015) to a later one.
3. From the `src/assets/js` and `src/assets/libs/*.js` folders, the scripts pass through the `gulp-uglify` plugin, which minifies the scripts.
4. Then, using the `gulp-concat` plugin, the scripts are combined into one common file `all.min.js`.
5. The compiled js file `all.min.js` is copied to `dist/assets/js`.
