import React from "react";
import Img from "gatsby-image";
import LocationIcon from "../location";
import LinkIcon from "../linkIcon";
import styles from "./profile.module.scss";

const Profile = (props) => {
  return (
    <div
      className={styles.profile}
      style={{
        "--profile-theme-color": "#c69662",
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
      <p>
        <a
          className={styles.handle}
          href={`https://twitter.com/${props.handle}`}
        >
          @{props.handle}
        </a>
      </p>
      {props.location !== "N/A" && (
        <p className={styles.location}>
          <LocationIcon
            style={{ marginBottom: "-2px", marginRight: "2px" }}
            size={15}
          />{" "}
          {props.location}
        </p>
      )}
      <div className={styles.url}>
        {props.expandedUrl !== "" && (
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
        )}
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  );
};

export default Profile;
