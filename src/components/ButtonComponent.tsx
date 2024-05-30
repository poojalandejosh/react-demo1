import React from "react";
import { styles } from "../containers/Login/LoginStyle";
import { buttonComponentProps } from "./ComponentTypes";

function ButtonComponent({
  btnText,
  backgroundColor,
  onClick,
  color,
  fontWeight,
}: buttonComponentProps) {
  return (
    <button
      role="btnForScreen"
      onClick={onClick}
      style={{ ...styles.loginBtnStyle, backgroundColor, color, fontWeight }}
    >
      {btnText}
    </button>
  );
}

export default ButtonComponent;
