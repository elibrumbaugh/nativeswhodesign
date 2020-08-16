import React from "react";
import Img from "gatsby-image";
import twitter from "../../twitter.svg";
import LocationIcon from "../location";
import LinkIcon from "../linkIcon";
import styles from "./profile.module.scss";

const Profile = (props) => {
  return (
    <div
      className={styles.profile}
      style={{
        "--profile-theme-color":
          props.hex === "#FFFFFF" ? "#1da1f2" : props.hex,
      }}
    >
      {props.sizes ? (
        <Img
          alt={`${props.name}'s profile picture on Twitter.'`}
          sizes={props.sizes}
          backgroundColor={true}
          className={styles.image}
        />
      ) : (
        <img
          className={styles.grayImage}
          alt={`${props.name}'s profile on Twitter.'`}
          src={props.image.replace("_normal", "_400x400")}
        />
      )}
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.handle}>@{props.handle}</p>
      <p className={styles.location}>
        <LocationIcon
          style={{ marginBottom: "-2px", marginRight: "2px" }}
          size={15}
        />{" "}
        {props.location}
      </p>
      <div className={styles.url}>
        {props.expandedUrl !== "" ? (
          <span>
            <LinkIcon style={{ marginBottom: "-2px", marginRight: "4px" }} />
            <a
              href={props.expandedUrl}
              className={styles.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.displayUrl}
            </a>
          </span>
        ) : (
          <span>
            <LinkIcon style={{ marginBottom: "-4px" }} /> N/A
          </span>
        )}
      </div>

      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      <a
        href={`https://twitter.com/${props.handle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkContainer}
      >
        <span className={styles.linkText}>
          <img
            src={twitter}
            alt="Twitter profile"
            style={{
              height: "12px",
              paddingRight: "8px",
              marginBottom: "-2px",
            }}
          />
          Twitter
          <span className={styles.linkArrow}>→</span>
        </span>
      </a>
    </div>
  );
};

export default Profile;
