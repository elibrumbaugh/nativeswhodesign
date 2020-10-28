import React from "react";
import Nav from "../components/nav";
import styles from "./about.module.scss";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="About | Native Talent In Tech" />
        <Nav theme={"light"} />
        <div className={styles.container}>
          <h1 className={styles.h1}>About this project</h1>
          <p>
            Native Talent in Tech is a collection of Indigenous technologists
            across various skills and experiences. The project’s goal is to
            highlight their work and elevate their voices by parsing Twitter
            bios for popular keywords. With more representation, we hope that it
            can also help companies discover the next generation of Natives
            talent. 
          </p>
          <p>
            <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
              <li>
                If you’re a Native in tech, use this project to connect with
                other Natives.
              </li>
              <li>
                If you’re a hiring manager, use this project to find qualified
                candidates.
              </li>
              <li>
                If you’re organizing a conference, use this project to find
                speakers.
              </li>
              <li>
                If you have a podcast or a show, use this project to find new
                guests.
              </li>
            </ul>
          </p>
          <h2 className={styles.emphasis}>What does “Native” mean?</h2>
          <p>
            “Native” is a general term that refers to a person of Indigenous
            lineage or peoples of long settlement and connection to specific
            lands. But like people, the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://indigenousfoundations.arts.ubc.ca/terminology/#:~:text=on%20global%20actions.-,Native,originated%20from%20a%20particular%20place.&text=In%20Canada%2C%20the%20term%20%E2%80%9CAboriginal,negative%20connotation%20and%20is%20outdated"
            >
              terminology
            </a>{" "}
            will continue to evolve.
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
            , a coalition of Native and non-Native software technologists whose
            goal is to build technology that reinforces Native beliefs,
            knowledge, and identity.
          </p>
          <h2 className={styles.emphasis}>Are there other sites like this?</h2>
          <p>
            Absolutely! Native Talent in Tech drew inspiration by these sites
            that highlight other underrepresented or marginalized groups.
          </p>
          <ul style={{ listStyleType: "disc", marginLeft: 20 }}>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://womenwho.design/"
              >
                Women Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blackswho.design"
              >
                Blacks Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://latinxswhodesign.com"
              >
                Latinxs Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.apiwho.design/"
              >
                API Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://filipinos-who-design.webflow.io/"
              >
                Filipinos Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://brazilianswho.design/"
              >
                Brazilians Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://indianswhodesign.in/"
              >
                Indians Who Design
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://queerdesign.club/"
              >
                Queer Design Club
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.womenwhodraw.com/"
              >
                Women Who Draw
              </a>
            </li>
            <li className={styles.liLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://peopleofcraft.com/"
              >
                People of Craft
              </a>
            </li>
          </ul>
          <h2 className={styles.emphasis}>
            How do I edit my profile or opt-out?
          </h2>
          <p>
            To request changes to your profile or opt-out of the collection,
            please send a DM to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Native_Talent"
            >
              @Native_Talent
            </a>{" "}
            on Twitter.{" "}
          </p>
          <h2 className={styles.emphasis}>How do I get involved?</h2>
          <p>
            Send a DM to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Native_Talent"
            >
              @Native_Talent
            </a>{" "}
            on Twitter.{" "}
          </p>

          <p>Thank you!</p>
        </div>
      </Layout>
    );
  }
}

export default App;
