import React from "react";
import styles from "./Button.module.css";
const Button = ({ icon, text, secondary_btn }) => {
  return (
    <button
      className={secondary_btn ? styles.secondary_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
