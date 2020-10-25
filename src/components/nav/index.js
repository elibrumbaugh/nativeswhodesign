import React from "react";
import { Link } from "gatsby";
import styles from "./nav.module.scss";

const Nav = (props) => {
  return (
    <div
      className={styles.container}
      style={{
        "--background": props.theme === "dark" && "var(--gray)",
        "--text": props.theme === "dark" && "#fff",
      }}
    >
      <Link to="/">
        <span className={styles.logo}>Native Talent in Tech</span>
      </Link>
      <nav className={styles.links}>
        {props.filter && (
          <button
            ref={props.filterButtonRef}
            className={`${styles.link} ${styles.filterButton}`}
            onClick={props.toggleFilterList}
            disabled={props.isLoading}
          >
            Filter
          </button>
        )}
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/nominate" className={styles.link}>
          Nominate
        </Link>
        <Link to="/jobs" className={styles.link}>
          Jobs
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
