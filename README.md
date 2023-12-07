[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://github.com/storybookjs)

![armstrong logo](https://raw.githubusercontent.com/Rocketmakers/armstrong-edge/main/docs/assets/armstrong-logo.svg)

Armstrong is a React component library made by [Rocketmakers](rocketmakers.com/) written in Typescript and SCSS.

[JIRA board](https://rocketmakers.atlassian.net/jira/software/projects/ARM/boards/154) (for internal use only)

## Using Armstrong

Armstrong is installed using `npm`.

```bash
npm install @rocketmakers/armstrong
# or
yarn add @rocketmakers/armstrong
```

Import the Armstrong stylesheet at the root of your project with:
```tsx
import '@rocketmakers/armstrong/css';
```

Then to use a component in your project

```tsx
import { Button } from '@rocketmakers/armstrong';

const MyComponent: React.FC = () => {
  return (
    <div>
      <Button>I'm a button</Button>
    </div>
  );
};
```

See [Storybook](https://rocketmakers.github.io/armstrong-edge/) for a list of all available components

For details on using Armstrong forms, see [Forms](https://rocketmakers.github.io/armstrong-edge/?path=/docs/form-form-hooks--docs)

### Issues / bug reports

If you're internal to Rocketmakers, post in the `#armstrong` channel and raise an issue [here](https://github.com/Rocketmakers/armstrong-edge/issues)

Otherwise, raise an issue in Github and follow the issue template

## Working on Armstrong

### Development

First cd into the root of the repo and run

```sh
npm run setup
```

We have a Storybook implementation which will pick up any files with the pattern `*.stories.tsx` or `*.stroies.mdx`

_For Storybook_, run

```sh
npm run storybook
```

then go to `localhost:6006`

### Linting

Armstrong uses eslint, style-lint, and prettier for linting.

Packages for these are managed as dev dependencies in NPM, and configuration files can be found in `module/`

We recommend using the vscode plugins `stylelint`, `eslint`, and `prettier` to make errors show in vscode, and to allow auto fixing functionality.

### Testing

Armstrong uses [Jest](https://jestjs.io/docs/using-matchers) for unit testing, [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library) for hook testing, and [Storybook](https://github.com/storybookjs) for component testing.

Packages for these are managed as dev dependencies in NPM, and configuration files can be found in `module/` and in `module/.jest` and `module/.storybook` respectively.

Tests can be run using `npm test` for all tests, or `npm test-jest` and `npm test-storybook` respectively.

We recommend using the vscode plugins `jest`, `jest-runner`, and `storybook helper` to manage test runs.

### Process

Please work in feature branches named `feature/*` branched from `main`

When your work is ready, submit a pull request into `main` and (if you're internal to Rocketmakers) post a link to your pull request in the `#armstrong-dev` slack channel for someone to review.

Github will run an Action to test linting and to see if Storybook builds before your branch can be merged.

Ensure [Commitizen](https://github.com/commitizen/cz-cli) is installed for templating your commit messages.

### Release process

When your feature branch has passed code review and been merged, a release will be triggered automatically.

Armstrong uses [Semantic release](https://semantic-release.gitbook.io/semantic-release/) for automatic versioning and publishing based on Commitizen formatted messages from main.

The type of release will be worked out from all of the commit messages in your merge. So the highest of the following will dictate the version

```
fix: will be a patch 0.0.X
feat: will be minor 0.X.0
breaking: will be major X.0.0
chore: won't trigger a release
```

So basically, do your work on a branch `feature/*`, make sure all of your commit messages go through Commitizen, and when you're happy open a PR onto main.

When it gets approved and merged in, the release type will automatically be worked out based on the highest (breaking > feat > fix) of all the commits that are part of that merge and a tag and version will be published to npm automatically.

This release happens in a Github Action labelled release. [Logs can be found here](https://github.com/Rocketmakers/armstrong-edge/actions/workflows/release.yml)

Once a release is complete, please post a cursory message in the `#armstrong` Slack channel with a list of changes.
