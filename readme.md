# The CoffeeMaker example as commonJS modules

## Overview

This is a demo of using CommonJS modules + Browserify to achieve what Angular DI helps to bring to javascript with its injector. 
Basically been able to make the code broken into modular pieces that are loosely coupled and can be replaced by mocks during testing.

The goal is to prove that, even when Angular DI is a very brilliant piece of code, it might be not useful if you're already using
CommonJS modules + Browserify.

This will also be the demo project for `build-workflow` a npm module that can help you to manage the common tasks related to 
frontend development, based on grunt, it provides some useful tasks to make the frontend development a little bit easier.

## building it

```bash
# install deps
npm i

# run the build target to generate the changelog, annotated documentation and apidocs.
grunt build 
```

## Running the tests

- To run only once (like in your ci server)
  ```bash
  grunt karma:one
  ```
- To run it several times (like in develop mode)
  ```bash
  grunt karma:develop
  ```
- To run it in chrome 
  ```bash
  grunt karma:chrome
  ```

### Coverage

open `./report/coverage/`, a folder like: `PhantomJS 1.9.8 (Mac OS X)` will contain your coverage report in HTML

## Generating the changelog

This task generates an html changelog

```bash
grunt changelog
```

open `./report/changelog/changelog.html`

## Installing the hooks (`commitmsg` and `prepush`)

This task check your code with `jshint`, `jsvalidate`, `jscs` and `jsbeautifier`

```bash
grunt install-hooks
```

**Important**: this will only work if you have a git repo.

## Documentation 

### Annotated documentation

This task will generate annotated documentation using `docco-husky-plus`

```bash
grunt docco-husky-plus
```

open the documentation folder: `./documentation/index.html`.

**NOTE**: Markdown files will be parsed and included as HTML files as part of the documentation generated.

### API documentation

This task will generate API documentation using `yuidoc`

```bash
grunt yuidoc
```

The api docs will be found in the `./apidocs/` folder.

## Javascript/CSS generation

### Browserify

Will generate the bundle from the commonJS modules, it also provides a transform that makes easy to replace calls to `require(GLOBAL_VAR)` with a global instance if provided (like window). Check the file `grunt-deps/configs/browserify.js` to see how this is done.

```bash
grunt browserify:js-main
```

### ez-frontend

- **for javascript targets** (tasks prefixed with **js-**)
  Used to generate the concatenated version of the final deliverable as well as to minimize the code, and perform replacements of tokens

- **for css targets** (tasks prefixed with **css-**)
  Used to generate concatenated version of css/less files and to minimize them.

If a version is provided, calling grunt with the option build-number set to any number the file will be renamend to contain the version number in the final output. This is handy to pass the build number from your CI tool.

**Example**

```bash
grunt --build-number=1.4.2
```

will generate the files: 
- `dist/js/main.1.2.3.js` with tokens like global.__TEST_ENV__ replaced by the provided values in the ez-frontend config (`grunt-deps/configs/ez-frontend`)
- `dist/js/main.1.2.3.min.js` Same as above, but minized with ugligy

This task uses the output of grunt `browserify:js-main`.



