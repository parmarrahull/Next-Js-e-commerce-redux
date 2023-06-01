import React, { useState } from "react";

const loaderHoc = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [loading, setLoading] = useState(true);
    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };
    return (
      <div>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          {loading && loadingMessage}
        </h2>
        <WrappedComponent setLoading={setLoadingState} {...props} />
      </div>
    );
  }
  return HOC;
};

export default loaderHoc;
