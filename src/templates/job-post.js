import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Link from "gatsby-link";
import Nav from "../components/nav";
import styles from "../pages/about.module.scss";
import { Helmet } from "react-helmet";
import ta from "time-ago";
import LocationIcon from "../components/location";
import BriefcaseIcon from "../components/briefcase";

export default ({ data, location }) => {
  const job = data.seeker;
  const date = ta.ago(job.job.creation_date);
  const helmetContent = `${job.job.company.name} is hiring a ${job.job.job_title} in ${
    job.job.job_location
  } on the Native Talent in Tech job board.`;
  const helmetTitle = `${job.job.company.name} is hiring!`;
  const helmetLink = `https://talent.nativesintech.org${location.pathname}`;
  return (
    <Layout>
      <Helmet
        title={`${job.job.job_title} | Native Talent in Tech`}
        meta={[
          {
            property: "description",
            content: helmetContent,
          },
          { property: "og:title", content: helmetTitle },
          {
            property: "og:description",
            content: helmetContent,
          },
          {
            property: "og:image",
            content: "https://talent.nativesintech.org/native_talent_in_tech.jpg",
          },
          { property: "og:url", content: helmetLink },
          { property: "og:type", content: "website" },
          { property: "og:site_name", content: "Native Talent in Tech" },
          { property: "twitter:site", content: "@Native_Talent" },
          { property: "twitter:creator", content: "@nativesintech" },
          { property: "twitter:card", content: "summary_large_image" },
          {
            property: "twitter:image",
            content: "https://talent.nativesintech.org/native_talent_in_tech.jpg",
          },
        ]}
      />
      <Nav theme={"light"} />
      <div className={styles.container}>
        <h1 className={styles.h1}>{job.job.job_title}</h1>
        <div className={styles.jobMetadata}>
          <p className={styles.p}>
            <span>
              <BriefcaseIcon
                fill="rgba(30, 30, 30, 1)"
                style={{ marginBottom: "-2px", marginRight: "9px" }}
                size={14}
              />
              <a href={job.job.company.company_url} className={styles.company}>
                {job.job.company.name}
              </a>
            </span>{" "}
            <span className={styles.interpunct}>·</span>{" "}
            <span>
              <LocationIcon fill="rgba(30, 30, 30, 1)" style={{ marginBottom: "-2px", marginRight: "8px" }} size={15} />
              {job.job.job_location}
            </span>
          </p>
          <p className={styles.jobDate}>{date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: job.job.job_description }} className="job-description" />

        <a href={job.job.job_application_link} className={styles.jobButtonContainer}>
          <span className={styles.jobButton}>
            Apply
            <span className={styles.arrow}>→</span>
          </span>
        </a>
        <div className={styles.backContainer}>
          <Link to="/jobs" className={styles.backLink}>
            Back to jobs
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    seeker(fields: { slug: { eq: $slug } }) {
      id
      job {
        id
        job_title
        job_description
        job_location
        creation_date
        job_application_link
        company {
          name
          company_url
        }
      }
    }
  }
`;
