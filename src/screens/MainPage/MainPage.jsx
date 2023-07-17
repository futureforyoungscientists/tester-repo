import React from "react";
import "./style.css";
import { SocialMediaMenu } from "../../components/SocialMediaMenu";
import { CompactMenu } from "../../components/CompactMenu";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="div">
        <div className="overlap">
          <div className="our-classes">
            <div className="overlap-group">
              <div className="text-wrapper">our classes</div>
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="welcome-section">
            <div className="overlap-2">
              <div className="text-wrapper-2">welcome</div>
              <p className="welcome-message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <img className="translucent-logo" alt="Translucent logo" src="/img/translucent-logo-1.png" />
        </div>
        <div className="header-section">
          <div className="selection-group">
            <div className="text-wrapper-3">please select your educators</div>
            <div className="text-wrapper-4">team nova</div>
            <div className="text-wrapper-5">team nebula</div>
          </div>
          <div className="compact-menu">
            <div className="text-wrapper-6">about us.</div>
            <div className="text-wrapper-7">blog.</div>
            <div className="text-wrapper-8">socials.</div>
            <img className="FYS-logo" alt="Fys logo" src="/img/fys-logo-6-1.png" />
          </div>
          {/* <div><CompactMenu/></div> */}
          <div className="title">
            <h1 className="future-for-young">
              Future for
              <br />
              Young Scientists
            </h1>
            <div className="text-wrapper-9">advancing the future</div>
          </div>
        </div>
        <div className="parent-testimonials">
          <div className="overlap-3">
            <div className="text-wrapper-10">parent testimonials</div>
            <p className="text-wrapper-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-wrapper-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-wrapper-13">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-wrapper-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
        <div id="socials" className="socials">
          <div className="overlap-4">
            <div className="text-wrapper-15">follow our journey</div>
            <div className="text-wrapper-16">reach us at futureforyoungscientists@gmail.com</div>
            {/* <img className="profile-pic" alt="Profile pic" src="/img/profile-pic-5.png" />
            <img className="img" alt="Profile pic" src="/img/profile-pic-5.png" />
            <img className="profile-pic-2" alt="Profile pic" src="/img/profile-pic-5.png" />
            <img className="profile-pic-3" alt="Profile pic" src="/img/profile-pic-5.png" />
            <img className="profile-pic-4" alt="Profile pic" src="/img/profile-pic-5.png" /> */}
            <SocialMediaMenu/>
          </div>
        </div>
      </div>
    </div>
  );
};
