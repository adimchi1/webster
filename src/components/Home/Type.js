import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Be kind",
          "Be kind",
          "be accepting",
          "be a good friend",
          "be appreciative of differences",
          "and be yourself!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
