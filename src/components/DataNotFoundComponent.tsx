import React from "react";
import noData from "../assets/images/noData.jpeg";
import { notFoundStyles } from "./ComponentStyle";
import TextComponent from "./TextComponent";

const DataNotFoundComponent = () => {
  return (
    <div role="dataNotFoundView">
      <div style={{ ...notFoundStyles.componentView, flexDirection: "column" }}>
        <img style={notFoundStyles.imgStyle} src={noData} alt="loading..." />
        <TextComponent
          fontFamily="fantasy"
          color="blue"
          text="Data not available"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
        />
      </div>
    </div>
  );
};

export default DataNotFoundComponent;
