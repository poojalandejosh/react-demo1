import React from "react";
import { textComponentProps } from "./ComponentTypes";

const TextComponent = ({
  color,
  fontSize,
  text,
  fontFamily,
  fontWeight,
  fontStyle,
  textSizeAdjust,
}: textComponentProps) => {
  return (
    <p
      style={{
        color,
        fontSize,
        fontFamily,
        fontWeight,
        fontStyle,
        textSizeAdjust,
      }}
    >
      {text}
    </p>
  );
};

export default TextComponent;
