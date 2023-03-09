import React, { Children } from "react";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import styles from "../styles/style.module.css";
export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className={styles.main}>
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </main>
      <Footer />
    </div>
  );
}
