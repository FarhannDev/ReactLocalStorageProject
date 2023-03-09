import React, { Children } from "react";
import styles from "../../styles/style.module.css";

export default function Box({ children }) {
  return (
    <div className="d-flex flex-column">
      <div className={styles.box}>
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </div>
    </div>
  );
}
