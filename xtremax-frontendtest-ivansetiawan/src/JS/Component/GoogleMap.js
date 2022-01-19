import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

function GoogleMap() {
  const [defaultGmap, setDefaultGmap] = useState({
    center: {
      lat: 1.28692,
      lng: 103.85457,
    },
    zoom: 15,
  });

  return (
    <div className="gmap-container">
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
  );
}

export default GoogleMap;
