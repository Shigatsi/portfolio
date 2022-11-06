import * as React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component: React.FC, idName: string, classNames: string) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app_wrapper">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 EVGENIYA 'Shigatsi'</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
