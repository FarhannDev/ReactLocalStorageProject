import React from "react";
import styles from "../../styles/style.module.css";
export default function Footer() {
  const today = new Date();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
