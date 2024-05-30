import React, { useState } from "react";
import { styles } from "../containers/Login/LoginStyle";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { inputAndLAbleComponentProps } from "./ComponentTypes";

function InputAndLabel({
  labelName,
  type,
  color,
  borderBottom,
  alignItems,
  value,
  width,
  onChange,
  isPassward,
}: inputAndLAbleComponentProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passWordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      role="inputView"
      style={{
        ...styles.inputAndLabelView,
        borderBottom,
        alignItems,
        width,
        flexDirection: "column",
      }}
    >
      <label htmlFor="name" style={{ ...styles.labelStyle, color }}>
        {labelName}
      </label>
      {isPassward ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            type={showPassword ? type : "password"}
            style={{ ...styles.inputStyle, color, width }}
            defaultValue={value}
            onChange={onChange}
            pattern={isPassward ? "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}" : "null"}
          />
          {showPassword ? (
            <IoEyeOutline
              onClick={() => passWordHandler()}
              style={{ marginRight: 10, color }}
            />
          ) : (
            <IoEyeOffOutline
              style={{ marginRight: 10, color }}
              onClick={() => passWordHandler()}
            />
          )}
        </div>
      ) : (
        <input
          type={type}
          style={{ ...styles.inputStyle, color, width }}
          defaultValue={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default InputAndLabel;
