import React from "react";
import GoogleMap from "./Component/GoogleMap";
import SimpleMap from "./Component/Map";
import Map from "./Component/Map";
import Sidebar from "./Component/Sidebar";
import "../CSS/mainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <Sidebar />
      {/* <Map /> */}
      {/* <SimpleMap /> */}
      <GoogleMap />
    </div>
  );
}

export default MainPage;
