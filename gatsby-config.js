require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-twitter-profiles",
      options: {
        consumerKey: process.env.NWD_TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.NWD_TWITTER_CONSUMER_SECRET,
        bearerToken: process.env.NWD_TWITTER_BEARER_TOKEN,
        twitterIdForFollowingList: "1294699293908115457",
      },
    },
    {
      resolve: "gatsby-source-seeker",
      options: {
        key: process.env.NWD_SEEKER_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.WWD_GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
