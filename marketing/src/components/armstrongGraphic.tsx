import "./armstrongGraphic.scss";

import * as React from "react";

import { Assets } from "../assets";

export const Capsule: React.FC = () => (
  <img src={Assets.Capsule} className="capsule" />
);

export const Space: React.FC = () => (
  <img src={Assets.Space} className="space" />
);

export const ArmstrongGraphic: React.FC = () => (
  <div className="armstrong-graphic">
    <Space />
    <Capsule />
  </div>
);
