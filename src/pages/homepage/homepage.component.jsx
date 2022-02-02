import React from "react";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component.jsx";
import ShopPage from "../shoppage/shoppage.component.jsx";
import "./homepage.style.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
