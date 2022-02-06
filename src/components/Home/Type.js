import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "REACT NATIVE DEVELOPER",
          "REACT JS DEVELOPER",
          "NODE JS DEVELOPER",
          "MONGODB EXPERT",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
