import { Args } from '@rocketmakers/shell-commands/lib/args';

import { concatSass, sassConcatWatch } from '../common/concatSass';

const run = async () => {
  const args = await Args.match({
    watch: Args.switched({
      description: 'Should watch for changes',
      shortName: 'w',
    }),
  });

  if (args.watch) {
    await sassConcatWatch();
  } else {
    await concatSass();
  }
};

run();
