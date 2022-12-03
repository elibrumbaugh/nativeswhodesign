import Image from "next/image";
import styles from "./index.module.scss";
import Button from "../../components/button";
import MapIcon from "../../icons/map";
import LinkIcon from "../../icons/link";
import TwitterIcon from "../../icons/twitter";

export default function Profile({ profile, lazyRoot }) {
  const {
    description,
    displayUrl,
    expandedUrl,
    handle,
    hex,
    image,
    location,
    name,
  } = profile;

  return (
    <div
      className={styles.profile}
      style={{
        "--profile-theme-color": hex === "#FFFFFF" ? "#1da1f2" : hex,
      }}
    >
      <div style={{ backgroundColor: "lightgray" }}>
        <Image
          className={styles.grayImage}
          src={image}
          alt={`${name}'s avatar on Twitter.'`}
          height={256}
          width={256}
          lazyRoot={lazyRoot}
        />
      </div>

      <h2 className={styles.name}>{name}</h2>

      <p className={styles.handleContainer}>
        <TwitterIcon />
        <a
          className={styles.handle}
          href={`https://twitter.com/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          @{handle}
        </a>
      </p>

      {location && (
        <p className={styles.location}>
          <MapIcon
            style={{ marginBottom: "-2px", marginRight: "2px" }}
            size={14}
          />
          {location}
        </p>
      )}

      {expandedUrl && (
        <div className={styles.url}>
          <LinkIcon size={14} />
          <a href={expandedUrl} target="_blank" rel="noopener noreferrer">
            {displayUrl}
          </a>
        </div>
      )}

      <p
        className={styles.description}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
