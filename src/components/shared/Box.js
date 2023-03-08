import React, { Children } from "react";
import styles from "../../styles/style.module.css";

export const Box = ({ children }) => {
  return (
    <div className="d-flex flex-column">
      <div className={styles.box}>
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </div>
    </div>
  );
};

export const BoxTitle = ({ title }) => {
  return <h3>{title}</h3>;
};

export const BoxSubheading = ({ subheading }) => {
  return <h4>{subheading}</h4>;
};
