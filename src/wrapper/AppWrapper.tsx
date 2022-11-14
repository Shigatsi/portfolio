import * as React from "react";
import { NavigationDots, SocialMedia } from "../components";
import './AppWrapper.scss';

const AppWrapper = (Component: React.FC, idName: string, classNames?: string) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app_wrapper">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
