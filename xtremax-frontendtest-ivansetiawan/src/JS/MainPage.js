import React, { useEffect } from "react";
import GoogleMap from "./Component/GoogleMap";
import Sidebar from "./Component/Sidebar";
import "../CSS/mainPage.css";

function MainPage() {
  // get scrollbar width
  useEffect(() => {
    const divWidth = document.querySelector(".App");

    // set root css global variable of 'scrollbarWidth'
    document.documentElement.style.setProperty(
      "--scrollbarWidth",
      `${window.innerWidth - divWidth.offsetWidth}px`
    );

    console.log(window.innerWidth - divWidth.offsetWidth, "[scrollbarWidth]");
  }, []);

  return (
    <div className="main-page">
      <Sidebar />
      <GoogleMap />
    </div>
  );
}

export default MainPage;
