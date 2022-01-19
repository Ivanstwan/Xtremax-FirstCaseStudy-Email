import React, { useState } from "react";
import "../../CSS/sidebar.css";
// import png file
import worldIcon from "../../IMG/world.png";
import singaporeIcon from "../../IMG/singapore.png";
import videosIcon from "../../IMG/videos.png";
import blogIcon from "../../IMG/blog.png";
import aboutIcon from "../../IMG/about.png";

function Sidebar() {
  const [mainChoice, setMainChoice] = useState("Browse");

  // Sidebar Main Choice (e.g Browse, Videos, Blog, etc)
  const sidebarMainChoice = [
    { name: "Browse", icon: worldIcon },
    { name: "Suggest Attraction", icon: singaporeIcon },
    { name: "Videos", icon: videosIcon },
    { name: "Blog", icon: blogIcon },
    { name: "About", icon: aboutIcon },
  ];

  // Sidebar Secondary (e.g Merlion, Marina Bay Sands)

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        {sidebarMainChoice.map((data) => {
          // Conditional Rendering
          // 1. if 'Browser' chosen / active, then render with different color
          return mainChoice === data.name ? (
            <div
              className="sidebar-main-choice active"
              id={data.name}
              onClick={(e) => {
                console.log(e.target.id);
                setMainChoice(e.target.id);
              }}
            >
              <img
                className="sidebar-main-choice-icon active"
                src={data.icon}
              />
              <div className="sidebar-main-choice-title active">
                {data.name}
              </div>
            </div>
          ) : (
            // 2. if not active, then render normally
            <div
              className="sidebar-main-choice"
              id={data.name}
              onClick={(e) => {
                console.log(e.target.id);
                setMainChoice(e.target.id);
              }}
            >
              <img className="sidebar-main-choice-icon" src={data.icon} />

              <div className="sidebar-main-choice-title">{data.name}</div>
            </div>
          );
        })}
      </div>
      <div className="sidebar-second"></div>
    </div>
  );
}

export default Sidebar;
