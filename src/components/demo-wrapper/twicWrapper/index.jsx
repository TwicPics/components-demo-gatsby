import React from "react";
import githubLogo from "../../../images/assets/github-mark-white.svg";
import stackBlitzLogo from "../../../images/assets/stackblitz.svg";

import "./index.scss";

export const TwicWrapper = ({ gitHubUrl, children }) => {
  const documentationUrl = `https://www.twicpics.com/docs/components/gatsby?utm_source=github&utm_medium=organic&utm_campaign=components`;
  const frameworkLogo = `https://assets.twicpics.com/demo/@twicpics-components/logos/gatsby.svg`;
  const GITHUB = `https://github.com/TwicPics/components-demo-gatsby`;
  const ONLINE_URL = `https://stackblitz.com/edit/github-wpprt7?file=`;
  const onlineUrl = `${ONLINE_URL}${gitHubUrl || "README.md"}`;
  const gitHubRedirect = gitHubUrl
    ? `${GITHUB}/blob/main/${gitHubUrl}`
    : GITHUB;
  return (
    <div id="twic-demo-wrapper">
      <header id="twic-header">
        <a href="/" title="Home">
          <h1 className="heading-primary">
            <img
              className="twicpics-logo"
              src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg"
              alt="TwicPics logo"
            />
            <span>x</span>
            <img
              className="framework-logo"
              src={frameworkLogo}
              alt="React Logo"
            />
          </h1>
        </a>
        <div className="ribbon">
          <div>
            <a
              target="_blank"
              href={gitHubRedirect}
              rel="noreferrer"
              title="Open in Github"
            >
              <img className="github" src={githubLogo} alt="Open in Github" />
            </a>
          </div>
        </div>
        <div className="tags-container">
          <div className="tag tag-components">@twicpics-components</div>
          <a
            href={documentationUrl}
            target="_blank"
            className="documentation-link tag tag--bg-purple-rain"
            rel="noreferrer"
          >
            Documentation
          </a>
        </div>
      </header>
      <main id="twic-demo-container">{children}</main>
    </div>
  );
};
