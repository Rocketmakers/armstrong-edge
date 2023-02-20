import * as chokidar from "chokidar";
import { concat } from "./concat";
import { sassGlob } from "./paths";

/** recompile on changes to sass files using chokidar */

export const watch = async () => {
  const watcher = chokidar.watch(sassGlob, { persistent: true });

  // eslint-disable-next-line no-console
  watcher.on("ready", () => console.log("Listening for SASS changes"));

  watcher.on("change", async (changedFilePath) => {
    // eslint-disable-next-line no-console
    console.log(`File ${changedFilePath} has changed`);
    await concat();
  });
};

watch();
