# Storybook Addon for XState

Inspired by [storybook-xstate-addon](https://github.com/simeonc/storybook-xstate-addon) just without requiring xstate/react to support web component storybook


 
### Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code

### Switch from TypeScript to JavaScript

Don't want to use TypeScript? We offer a handy eject command: `yarn eject-ts`

This will convert all code to JS. It is a destructive process, so we recommended running this before you start writing any code.

 
  
## Release Management

### Setup

This project is configured to use [auto](https://github.com/intuit/auto) for release management. It generates a changelog and pushes it to both GitHub and npm. Therefore, you need to configure access to both:

- [`NPM_TOKEN`](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-access-tokens) Create a token with both _Read and Publish_ permissions.
- [`GH_TOKEN`](https://github.com/settings/tokens) Create a token with the `repo` scope.

Then open your `package.json` and edit the following fields:

- `name`
- `author`
- `repository`

#### Local

To use `auto` locally create a `.env` file at the root of your project and add your tokens to it:

```bash
GH_TOKEN=<value you just got from GitHub>
NPM_TOKEN=<value you just got from npm>
```

Lastly, **create labels on GitHub**. You’ll use these labels in the future when making changes to the package.

```bash
npx auto create-labels
```

If you check on GitHub, you’ll now see a set of labels that `auto` would like you to use. Use these to tag future pull requests.

#### GitHub Actions

This template comes with GitHub actions already set up to publish your addon anytime someone pushes to your repository.

Go to `Settings > Secrets`, click `New repository secret`, and add your `NPM_TOKEN`.

### Creating a releasing

To create a release locally you can run the following command, otherwise the GitHub action will make the release for you.

```sh
yarn release
```

That will:

- Build and package the addon code
- Bump the version
- Push a release to GitHub and npm
- Push a changelog to GitHub
