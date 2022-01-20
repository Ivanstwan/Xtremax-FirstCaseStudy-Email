import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "../../CSS/googleMap.css";

function GoogleMap() {
  // State - initial value for google map
  const [defaultGmap, setDefaultGmap] = useState({
    center: {
      lat: 1.28692,
      lng: 103.85457,
    },
    zoom: 15,
  });

  // State - current option selected (e.g Merlion)
  const [selected, setSelected] = useState("");

  // State - store data from json file
  const [dataAttract, setDataAttract] = useState("");

  // // reference for AJAX
  // // https://www.youtube.com/watch?v=wdvruTuWvW8
  // // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

  useEffect(() => {
    let xhr = new XMLHttpRequest();

    // GET JSON file from public folder
    xhr.open("GET", "data/data.json", true);

    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        // console.log(xhr);
        // console.log("success");
        // console.log(xhr.response);
        setDataAttract(xhr.response);
      }
    };

    xhr.send();
  }, []);

  return (
    <div className="gmap">
      <div className="gmap-sidebar-second">
        <div className="gmap-sidebar-filter">
          <div className="gmap-sidebar-filter-text">Filter by favorite</div>
          <div className="gmap-sidebar-filter-icon">
            <i className="fas fa-sort-down" />
          </div>
        </div>
        {/* Conditional Rendering */}
        {/* 1. if 'dataAttract' state already filled with data, then render (waiting for setState so not render undefined) */}
        {/* 2. render condition, if 'selected' state is the same as place_name e.g 'Merlion' - className 'active' */}
        {dataAttract
          ? dataAttract.map((data) => {
              return data.place_name === selected ? (
                <div className="gmap-sidebar-menu">
                  <div className="gmap-sidebar-menu-container">
                    <div
                      className="gmap-sidebar-menu-main active"
                      onClick={() => {
                        setSelected(data.place_name);
                      }}
                    >
                      {data.place_name}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="gmap-sidebar-menu">
                  <div className="gmap-sidebar-menu-container">
                    <div
                      className="gmap-sidebar-menu-main"
                      onClick={() => {
                        setSelected(data.place_name);
                      }}
                    >
                      {data.place_name}
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className="gmap-container">
        <div className="gmap-upperbar">
          <div className="gmap-upperbar-title">
            Top-Rated Tourist Attractions in Singapore
          </div>
          <div className="gmap-upperbar-icon-container">
            <i className="fas fa-cog" />
            <i className="fas fa-question-circle" />
            <i className="fas fa-times-circle" />
          </div>
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAc8fCpr9l7zwkHjABGhWcOYEgW9kQCGbo",
            }}
            defaultCenter={defaultGmap.center}
            defaultZoom={defaultGmap.zoom}
          >
            {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
