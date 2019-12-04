import React from "react";

import Iframe from "react-iframe";

export const NavBar = props => {
  return (
    <div>
      <Iframe
        url="https://mov-e.herokuapp.com/move/homeTaylor"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
  );
};
