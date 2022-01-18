import React from "react";
import "../../CSS/sidebar.css";

function Sidebar() {
  // Sidebar Main Choice (e.g Browse, Videos, Blog, etc)
  const sidebarMainChoice = [
    { name: "Browse", icon: "fas fa-globe-asia" },
    { name: "Suggest Attraction", icon: "fas fa-globe-asia" },
    { name: "Videos", icon: "fas fa-globe-asia" },
    { name: "Blog", icon: "fas fa-globe-asia" },
    { name: "About", icon: "fas fa-globe-asia" },
  ];

  // Sidebar Secondary (e.g Merlion, Marina Bay Sands)

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        {sidebarMainChoice.map((data) => {
          return (
            <div className="sidebar-main-choice">
              <i className={`sidebar-main-choice-icon ${data.icon}`}></i>
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
