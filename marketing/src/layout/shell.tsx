import "../theme/theme.scss";
import "./shell.scss";

import { Button, ClassHelpers } from "@rocketmakers/armstrong";
import { Link } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";

import { Assets } from "../assets";

const Shell = ({ viewClass, children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Helmet title="Armstrong React" />
      <header className="fixed-width">
        <Link to="/" className="logo">
          <img alt="Armstrong" src={Assets.Logo} />
        </Link>

        <Button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </Button>

        <nav data-menu-open={isMenuOpen}>
          <a href="LINK_TO_STORYBOOK_HERE">Installation</a>
          <a
            target="_blank"
            href="https://rocketmakers.github.io/armstrong"
            rel="noreferrer"
          >
            Storybook
          </a>
        </nav>
      </header>

      <main className={ClassHelpers.classNames(viewClass, "fixed-width")}>
        {children}
      </main>

      <footer className="fixed-width">
        <img
          alt="Rocketmakers"
          className="rm-logo"
          src={Assets.RocketmakersLogo}
        />
        <span>
          Built and powered by{" "}
          <a
            href="https://www.rocketmakers.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rocketmakers
          </a>{" "}
          ltd {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
};

export default Shell;
