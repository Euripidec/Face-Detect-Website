import React from "react";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div>
      <Tilt
        perspective={200}
        style={{
          display: "flex",
          height: "150px",
          width: "150px",
          fontSize: "3rem",
          borderRadius: "5rem",
          justifyContent: "center",
          alignItems: "center",
          display: 'flex', 
          justifyContent: 'flex-end'
        }}
      >
        <div>
          <h1
            style={{
              margin: "-40px 0 0 0",
              textShadow: "rgb(0 0 0 / 54%) 0 2px 5px",
              position: "absolute",
              left: '0px',
              top: '0px'
            }}
          >
            🧠
          </h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
