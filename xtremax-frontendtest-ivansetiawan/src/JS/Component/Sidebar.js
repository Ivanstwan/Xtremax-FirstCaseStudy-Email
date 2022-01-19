import React, { useState, useEffect } from "react";
import "../../CSS/sidebar.css";
// import png file
import worldIcon from "../../IMG/world.png";
import singaporeIcon from "../../IMG/singapore.png";
import videosIcon from "../../IMG/videos.png";
import blogIcon from "../../IMG/blog.png";
import aboutIcon from "../../IMG/about.png";
import SecondarySidebar from "./SecondarySidebar";

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
  const [dataAttract, setDataAttract] = useState();
  // reference for AJAX
  // https://www.youtube.com/watch?v=wdvruTuWvW8
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

  useEffect(() => {
    console.log("use effect");

    let xhr = new XMLHttpRequest();

    // GET JSON file from public folder
    xhr.open("GET", "data/data.json", true);

    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        // console.log(xhr);
        // console.log("success");
        console.log(xhr.response);
        setDataAttract(xhr.response);
      }
    };

    xhr.send();
  }, []);

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
      {dataAttract ? <SecondarySidebar dataAtt={dataAttract} /> : ""}
    </div>
  );
}

export default Sidebar;
