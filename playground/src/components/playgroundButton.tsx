import { Button } from "@rocketmakers/armstrong-dev";
import * as React from "react";

import styles from "./playgroundButton.module.scss";

export const PlaygroundButton: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Button className={styles.button}>{children}</Button>;
};
