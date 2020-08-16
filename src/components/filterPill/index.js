import React from "react";
import close from "../../close.svg";
import styles from "./filterPill.module.scss";
import ClickableBox from "clickable-box";

const FilterPill = (props) => {
  return (
    <span className={styles.pill}>
      {props.title}
      <ClickableBox
        onClick={props.onCloseClick}
        aria-label="Remove filter"
        className={styles.close}
      >
        <img
          src={close}
          alt="Close"
          style={{ height: "13px", margin: "0 4px -3px" }}
        />
      </ClickableBox>
    </span>
  );
};

export default FilterPill;
