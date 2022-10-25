import * as React from "react";

import { ClassNames } from "../../utils";
import { IModalProps } from "..";
import { Modal } from "../modal";

import "./sideMenu.basic.scss";

export interface ISideMenuProps
  extends Omit<IModalProps, "darkenBackground" | "centred"> {
  side?: "left" | "right";
}

/** Extends the Modal component (see docs for modal) with some extra features and styling to work as a slide in sidebar */
export const SideMenu = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ISideMenuProps>
>(({ className, children, side, ...modalProps }, forwardedRef) => {
  return (
    <Modal
      ref={forwardedRef}
      data-side={side}
      className={ClassNames.concat("arm-side-menu", className)}
      {...modalProps}
      darkenBackground
      centred={false}
    >
      {children}
    </Modal>
  );
});

SideMenu.defaultProps = {
  side: "left",
};
