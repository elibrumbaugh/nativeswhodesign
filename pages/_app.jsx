import Head from "next/head";
import Script from "next/script";
import "reset-css";
import "../styles/global.css";
import "../styles/index.scss";

export default function NativeTalentInTech({ Component, pageProps }) {
  const title = "Native Talent in Tech";
  const description = "A Twitter directory of accomplished Natives in tech.";
  const image = "https://talent.nativesintech.org/opengraph.png";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://talent.nativesintech.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="twitter:site" content="@Native_Talent" />
        <meta property="twitter:creator" content="@nativesintech" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={image} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <script
          async
          defer
          data-website-id="dd14dc39-8c2b-4bcb-858c-080eb9ad71cb"
          src="https://analytics.nativesintech.org/umami.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
