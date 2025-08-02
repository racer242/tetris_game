// import React, { Component } from "react";

// class Animate extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       // <iframe
//       //   src="tetris/tetris.html"
//       //   title="Example Website"
//       //   width="1080"
//       //   height="1920"
//       //   style={{ overflow: "hidden" }}
//       // ></iframe>
//     );
//   }
// }

import React, { useState } from "react";
import { AnimateCC } from "react-adobe-animate";

const Animate = () => {
  return (
    <div style={{ width: "1080px", background: "#070739" }}>
      <AnimateCC animationName="tetris" />
    </div>
  );
};

export default Animate;
