import React from "react";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`container ${styles.nav}`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
