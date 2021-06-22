# Armstrong

Armstrong is a React component library made by [Rocketmakers](rocketmakers.com/) written in Typescript and SCSS.

By default, Armstrong doesn't compile its SCSS, allowing consuming projects to make use of its various SCSS variables and mixins.

[JIRA board](https://rocketmakers.atlassian.net/jira/software/projects/ARM/boards/154) (for internal use)

## Using Armstrong

Armstrong is installed using `npm`.

```bash
# This repo is currently @rocketmakers/armstrong-edge, writing docs as if deployed as main armstrong package
npm install @rocketmakers/armstrong
# or
yarn add @rocketmakers/armstrong
```

Then to use a component in your project

```tsx
import { Button } from "@rocketmakers/armstrong";

const MyComponent: React.FC = () => {
  return (
    <div>
      <Button>I'm a button</Button>
    </div>
  );
};
```

See [Storybook](todo.com) for a list of all available components

For details on how to import Armstrong's styling, see [SCSS](STORYBOOK LINK TODO)

For details on using Armstrong forms, see [Forms](STORYBOOK LINK TODO)

### Issues / bug reports

If you're internal to Rocketmakers, post in the `#armstrong` channel and raise a ticket in [JIRA](https://rocketmakers.atlassian.net/jira/software/projects/ARM/boards/154)

Otherwise, raise an issue in Github and follow the issue template

## Working on Armstrong

### Development

First cd into the root of the repo and run

```sh
npm install
```

There are two options for working on Armstrong.

- We have a playground, which is just a really simple react app with no linting, which has the Armstrong module linked in using `npm link`
- We have a Storybook implementation which will pick up any files with the pattern `*.stories.tsx`

_For the playground_, run

```sh
npm start

# then in separate window from /module run
npm run start-sass
```

then go to `localhost:3001`

_For Storybook_, run

```sh
npm run storybook

# then in separate window from /module run
npm run start-sass
```

then go to `localhost:6006`

`npm run start-sass` will spin up a watcher which will watch all SASS files and rebuild them

For more information on using SASS, see SASS Concatenation in [SCSS](STORYBOOK LINK TODO)

### Process

Please work in feature branches named `feature/*` or if your branch is on a single ticket `feature/ARM-000/*`

When your work is ready, submit a merge request and (if you're internal) post a link to your merge request in the `#armstrong` slack channel for someone to review.

There will be a CI which will run to check if your work passes linting and if Storybook can still build.

One day we will talk about testing....
