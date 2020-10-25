import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Native Talent in Tech"
      meta={[
        {
          property: "description",
          content:
            "A Twitter directory of accomplished Natives in the tech industry.",
        },
        { property: "og:title", content: "Native Talent in Tech" },
        {
          property: "og:description",
          content:
            "A Twitter directory of accomplished Natives in the tech industry.",
        },

        {
          property: "og:image",
          content: "https://talent.nativesintech.org/natives_in_tech.jpg",
        },
        {
          property: "og:url",
          content: "https://talent.nativesintech.org",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Native Talent in Tech" },
        { property: "twitter:site", content: "@Native_Talent" },
        { property: "twitter:creator", content: "@nativesintech" },
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:image",
          content: "https://talent.nativesintech.org/natives_in_tech.jpg",
        },
      ]}
    />
    {children}
  </div>
);

export default Layout;
