import React from "react";
import Link from "gatsby-link";
import Nav from "../components/nav";
import styles from "./about.module.scss";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="About | Women Who Design" />
        <Nav theme={"light"} />
        <div className={styles.container}>
          <h1 className={styles.h1}>About this project</h1>
          <p>
            Women Who Design is a Twitter directory of accomplished women in the
            design industry. It aims to help people find notable and relevant
            voices to follow on Twitter by parsing Twitter bios for popular
            keywords.
          </p>
          <p>Here are some things Women Who Design can help you with:</p>
          <h2 className={styles.emphasis}>
            Use{" "}
            <a
              href="https://www.proporti.onl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              proporti.onl
            </a>{" "}
            to check the ratio of the people you follow on Twitter.
          </h2>
          <p>
            If you're following more men than women, use this project to follow
            new women and diversify the voices in your feed. Be aware that a
            feed of white women is not diverse.
          </p>
          <h2 className={styles.emphasis}>
            If you're a hiring manager, use this project to find candidates.{" "}
          </h2>
          <p>
            Examine the ratio of senior men to senior women in your
            organization. Are women of color equally represented? Consider
            hiring women into promotions above their current role.
          </p>

          <h2 className={styles.emphasis}>
            If you're organizing a conference, use this project to find
            speakers.
          </h2>
          <p>
            Ensure that the women's speaking slots are as prominent as the
            men's. Are women of color equally represented? Consider reaching out
            to women who have never given a talk before.
          </p>

          <h2 className={styles.emphasis}>
            If you have a podcast, use this project to find new guests.{" "}
          </h2>
          <p>
            Be mindful of interruptions and ensure that your women guests get
            equal speaking time. Are women of color equally represented?
            Consider inviting women who don't already have an audience.
          </p>

          <h2 className={styles.emphasis}>Further reading</h2>
          <p>
            For becoming a better ally – to women, people of color, LGBTQ,
            disabled, ESL or any other marginalized group.
          </p>

          <ul className={styles.ul}>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://latinxswhodesign.com"
                rel="noopener noreferrer"
              >
                Latinxs Who Design
              </a>{" "}
              by Pablo Stanley
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://blackswho.design"
                rel="noopener noreferrer"
              >
                Blacks Who Design
              </a>{" "}
              by Wes O'Haire
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="http://www.guidetoallyship.com/"
                rel="noopener noreferrer"
              >
                Guide to Allyship
              </a>{" "}
              by Amélie Lamont
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                href="https://peopleofcraft.com/"
                rel="noopener noreferrer"
              >
                People of Craft
              </a>{" "}
              by Amélie Lamont & Timothy Goodman
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@nmsanchez/how-to-build-inclusive-culture-360160f417a1"
              >
                How to Build Inclusive Culture
              </a>{" "}
              by Nicole Sanchez
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/mule-design/be-a-pal-my-dudes-a34c06df1b1d"
              >
                Be a Pal, My Dudes
              </a>{" "}
              by Erika Hall
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://larahogan.me/blog/what-sponsorship-looks-like/"
              >
                What Does Sponsorship Look Like?
              </a>{" "}
              by Lara Hogan
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.huffingtonpost.com/entry/some-garbage-i-used-to-believe-about-equality_us_58501c5be4b0151082221ef7"
              >
                Some Garbage I Used to Believe About Equality
              </a>{" "}
              by Johnathan Nightingale
            </li>
          </ul>

          <h2 className={styles.emphasis}>Opt out</h2>
          <p>
            If you've been featured in the directory and you'd rather not be,
            please send a DM to{" "}
            <a
              href="https://twitter.com/womenwhodesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              @womenwhodesign
            </a>{" "}
            on Twitter and you will be removed.
          </p>
          <h2 className={styles.emphasis}>Note</h2>
          <p>
            This project is in a work-in-progress. If you have a suggestion or
            find a bug, please let me know.
          </p>

          <p>
            Special thanks to{" "}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
            for their support.
          </p>
          <p>
            <span role="img" aria-label="peace hand sign">
              ✌️
            </span>{" "}
            <a
              href="https://twitter.com/julesforrest"
              target="_blank"
              rel="noopener noreferrer"
            >
              @julesforrest
            </a>
          </p>
          <div className={styles.backContainer}>
            <Link to="/" className={styles.backLink}>
              Back to directory
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
