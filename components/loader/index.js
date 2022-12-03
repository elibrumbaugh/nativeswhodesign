import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>
          Native Talent in Tech is a Twitter directory of accomplished Natives
          in the tech industry
        </h1>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};

export default Loader;
