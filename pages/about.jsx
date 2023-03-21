import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import styles from "../components/about/index.module.scss";
import Button from "../components/button";

const App = () => (
  <>
    <Head>
      <title>About | Native Talent in Tech</title>
    </Head>
    <Nav theme="light" />
    <div className={styles.container}>
      <h1 className={styles.h1}>About this project</h1>
      <p>
        Native Talent in Tech is a collection of Indigenous technologists across
        various skills and experiences. The project’s goal is to highlight their
        work and elevate their voices by parsing Twitter bios for popular
        keywords. With more representation, we hope that it can also help
        companies discover the next generation of Native talent. 
      </p>

      <ul style={{ listStyle: "disc" }}>
        <li>
          If you’re a Native in tech, use this project to connect with other
          Natives.
        </li>
        <li>
          If you’re a hiring manager, use this project to find qualified
          candidates.
        </li>
        <li>
          If you’re organizing a conference, use this project to find speakers.
        </li>
        <li>
          If you have a podcast or a show, use this project to find new guests.
        </li>
      </ul>

      <h2 className={styles.emphasis}>Source code</h2>
      <p>
        This project is a fork of Women Who Design. They are happy to support
        new directories highlighting underrepresented or marginalized groups. If
        you’re looking to start a similar effort, feel free to fork the project
        on <a href="https://github.com/julesforrest/womenwhodesign">GitHub</a>.
      </p>

      <h2 className={styles.emphasis}>What does “Native” mean?</h2>
      <p>
        “Native” is a general term that refers to a person of Indigenous lineage
        or peoples of long settlement and connection to specific lands. But like
        people, the terminology will continue to evolve.
      </p>
      <h2 className={styles.emphasis}>Who built this site?</h2>
      <p>
        Thanks to the great work of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/julesforrest"
        >
          Jules Forest
        </a>
        , creator of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://womenwho.design/"
        >
          Women Who Design
        </a>
        , for providing the source code on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/julesforrest/womenwhodesign"
        >
          GitHub
        </a>{" "}
        for new directories like this.
      </p>
      <p>
        This site was created by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/adamrecvlohe"
        >
          Adam Recvlohe
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/elibrumbaugh"
        >
          Eli Taretąndeh Brumbaugh
        </a>
        , and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/jayciro"
        >
          Jay Castro
        </a>{" "}
        from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nativesintech.org/"
        >
          Natives in Tech
        </a>
        , a coalition of Native and non-Native software technologists whose goal
        is to build technology that reinforces Native beliefs, knowledge, and
        identity.
      </p>

      <h1 className={styles.h1}>Other notes</h1>
      <h2 className={styles.emphasis}>Support</h2>
      <p>
        Native Talent in Tech is an independent project. If you’re interested in
        supporting it, please consider posting a job.
      </p>
      <Button
        href="https://womenwhodesign.seeker.company/submit/job"
        width="auto"
      >
        Post a job
      </Button>
      <h2 className={styles.emphasis}>Opt out</h2>
      <p>
        This page is generated from the follow list of{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/Native_Talent"
        >
          Native_Talent
        </a>
        .
      </p>
      <p>
        If you’ve been featured in the directory and you’d rather not be, please
        send an email to{" "}
        <a href="mailto:hello@nativesintech.org">hello@nativesintech.org</a> and
        you will be removed.
      </p>

      <p>
        Special thanks to{" "}
        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>{" "}
        for their support.
      </p>
      <div className={styles.backContainer}>
        <Link href="/" className={styles.backLink}>
          <a>Back to directory</a>
        </Link>
      </div>
    </div>
  </>
);

export default App;
