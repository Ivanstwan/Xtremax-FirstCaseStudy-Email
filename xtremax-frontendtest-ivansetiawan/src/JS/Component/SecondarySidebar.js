// import React, { useEffect, useState } from "react";

// function SecondarySidebar() {
//   // store data from json file
//   const [dataAttract, setDataAttract] = useState("");

//   // // reference for AJAX
//   // // https://www.youtube.com/watch?v=wdvruTuWvW8
//   // // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

//   useEffect(() => {
//     console.log("use effect");

//     let xhr = new XMLHttpRequest();

//     // GET JSON file from public folder
//     xhr.open("GET", "data/data.json", true);

//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         // console.log(xhr);
//         // console.log("success");
//         // console.log(xhr.response);
//         setDataAttract(xhr.response);
//       }
//     };

//     xhr.send();
//   }, []);

//   return (
//     <div className="sidebar-second">
//       <div className="sidebar-second">
//         {dataAttract ? "" : ""}
//         {/* {test.dataAtt.map((data) => {
//           return <div>{data.place_name}</div>;
//         })} */}
//       </div>
//     </div>
//   );
// }

// export default SecondarySidebar;
