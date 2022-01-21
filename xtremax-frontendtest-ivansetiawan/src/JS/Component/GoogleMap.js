import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import "../../CSS/googleMap.css";
import Marker from "./Marker";

function GoogleMap() {
  // State - initial value for google map
  // center => for centering the google map
  // zoom => for zooming scale on google map
  const [defaultGmap, setDefaultGmap] = useState({
    center: {
      lat: 1.287466,
      lng: 103.851424,
    },
    zoom: 15,
  });

  // State - current option selected (e.g Merlion)
  // will change value to (e.g 'Merlion'), if 'secondary component' OR 'google map marker' clicked / onClick event called
  const [selected, setSelected] = useState("");

  // // reference for AJAX
  // // https://www.youtube.com/watch?v=wdvruTuWvW8
  // // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

  // State - store data from json file
  const [dataAttract, setDataAttract] = useState("");

  useEffect(() => {
    let xhr = new XMLHttpRequest();

    // GET JSON file from public folder
    xhr.open("GET", "data/data.json", true);

    // request file type json
    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("success");
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
        {/* Conditional Rendering - for secondary sidebar */}
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
                      {data.place_other_attraction[0] ? (
                        <>
                          <div className="gmap-sidebar-menu-main-container">
                            <div>{data.place_name}</div>
                            <i className="fas fa-sort-down" />
                          </div>
                        </>
                      ) : (
                        <div>{data.place_name}</div>
                      )}
                    </div>
                    {data.place_other_attraction.map((dat) => {
                      return (
                        <div className="gmap-sidebar-menu-main-mini-location">
                          {dat}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="gmap-sidebar-menu">
                  <div className="gmap-sidebar-menu-container">
                    <div
                      className="gmap-sidebar-menu-main"
                      onClick={() => {
                        setSelected(data.place_name);

                        setDefaultGmap({
                          center: {
                            lat: data.latitude,
                            lng: data.longitude,
                          },
                          zoom: 17,
                        });
                      }}
                    >
                      {data.place_other_attraction[0] ? (
                        <div className="gmap-sidebar-menu-main-container">
                          <div>{data.place_name}</div>
                          <i className="fas fa-sort-down" />
                        </div>
                      ) : (
                        <div>{data.place_name}</div>
                      )}
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

        {/* Google Map React API reference */}
        {/* 1. getting started with google-map-react - https://www.npmjs.com/package/google-map-react */}
        {/* 2. centering map - https://stackoverflow.com/questions/52259634/reposition-the-center-of-the-map-when-the-location-changes */}

        <GoogleMapReact
          // style={{ height: "100%", width: "100%", display: "relative" }}
          bootstrapURLKeys={{
            key: "AIzaSyAc8fCpr9l7zwkHjABGhWcOYEgW9kQCGbo",
          }}
          center={defaultGmap.center}
          zoom={defaultGmap.zoom}
          // 1. when child clicked (e.g Merlion marker), get key ('Merlion')
          onChildClick={(key) => {
            console.log("parent log, child have been clicked", key);
            setSelected(key);

            // 2. find langitude, longitude in dataAttract with place_name === 'Merlion'
            for (let i = 0; i < dataAttract.length; i++) {
              if (dataAttract[i].place_name === key) {
                console.log(dataAttract[i].place_name);
                // 3. centering google to 'Merlion' & zoom to 17
                setDefaultGmap({
                  center: {
                    lat: dataAttract[i].latitude,
                    lng: dataAttract[i].longitude,
                  },
                  zoom: 17,
                });
              }
            }
          }}
          // 1. when click on parent / other than child / no location selected
          onClick={() => {
            // 2. turns state to none / basically to no location selected
            setSelected("");
            // 3. turn back the google map zoom to 15
            setDefaultGmap({
              center: {
                lat: defaultGmap.center.lat,
                lng: defaultGmap.center.lng,
              },
              zoom: 15,
            });
          }}
        >
          {/* CONDITIONAL RENDERING - for Marker / pinpoint */}
          {/* 1. render Marker, only if 'dataAttract' have value / not empty (waiting for setState process) */}
          {dataAttract
            ? dataAttract.map((data) => {
                // 2. render Marker with props as seen below, important notes! "active" props will be explained in Marker.js component
                return (
                  <Marker
                    lat={data.latitude}
                    lng={data.longitude}
                    text={data.place_name}
                    // 3. sent props 'active' with value 'true', if the location selected === location name
                    active={data.place_name === selected}
                    desc={data.place_description}
                    key={data.place_name}
                  />
                );
              })
            : ""}
        </GoogleMapReact>

        {/* POP UP COMPONENT */}
        {selected
          ? dataAttract.map((data) => {
              {
                return data.place_name === selected ? (
                  <div className="popup">
                    <div className="popup-img-container">
                      <img src={data.image_src} className="popup-img" />
                    </div>
                    <div className="popup-title">{data.place_name}</div>
                    <div className="popup-desc-container">
                      <div className="popup-desc">
                        {data.place_description[0]}
                      </div>
                      <div className="popup-desc-two">
                        {data.place_description[1]}
                      </div>
                      <div className="popup-desc-location">
                        <i className="fas fa-map-marker-alt" />
                        <div className="popup-desc-location-text">
                          {data.place_description[2]}
                        </div>
                      </div>
                      <div className="popup-desc-web">
                        <i className="fas fa-globe-asia" />
                        <div className="popup-desc-web-text">
                          {data.place_description[3]}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              }
            })
          : ""}
      </div>
    </div>
  );
}

export default GoogleMap;
