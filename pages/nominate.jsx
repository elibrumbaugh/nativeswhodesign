import _ from "lodash-es";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import styles from "../components/about/index.module.scss";

export default function Nominate() {
  return (
    <>
      <Head>
        <title>Nominate | Native Talent in Tech</title>
      </Head>
      <Nav theme="light" />
      <div className={styles.container}>
        <h1 className={styles.h1}>Nominate</h1>

        <p className={styles.p}>
          If you know a Native whose voice is valuable to the tech industry,
          please email{" "}
          <a href="mailto:hello@nativesintech.org">hello@nativesintech.org</a>{" "}
          with their Twitter handle and a few words about why you're nominating
          them.
        </p>

        <div className={styles.backContainer}>
          <Link href="/">
            <a className={styles.backLink}>Back to directory</a>
          </Link>
        </div>
      </div>
    </>
  );
}
