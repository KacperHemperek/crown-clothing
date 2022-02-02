import React from "react";

import { DirectoryMenu } from "../../components/directory-menu/directory-menu.component";

import "./homepage.style.scss";

export const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
