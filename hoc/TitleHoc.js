import React from "react";

const TitleHoc = (Component, title) => {
  return (props) => {
    return (
      <div className="titled-container">
        <div className="title">
          <h3
            style={{
              backgroundColor: "darkcyan",
              height: "60px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {title}
          </h3>
        </div>
        <div className="titled-content">
          <Component {...props} />
        </div>
      </div>
    );
  };
};

export default TitleHoc;
