import React, { useEffect, useRef, useState } from "react";

const SearchHoc = (WrappedComponent) => {
  function HOC(props) {
    const { data } = props;
    const [searchTerm, setSearchTerm] = useState("");
    
    const searchRef = useRef(null);
    useEffect(() => {
      searchRef.current.focus();
    }, []);

    const filterData = data.filter((product) =>
      product.category.toLowerCase().includes(searchTerm)
    );

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "55px",
          }}
        >
          <input
            ref={searchRef}
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
            type="search"
            placeholder="Search"
          />
        </div>
        <WrappedComponent {...props} filterData={filterData} />
      </>
    );
  }
  return HOC;
};

export default SearchHoc;
