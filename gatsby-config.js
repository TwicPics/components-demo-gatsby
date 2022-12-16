/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "@twicpics/components/gatsby",
      options: {
        twicpics: {
          domain: "https://demo.twic.pics",
          anticipation: 0.5,
          step: 100,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:400,600,700"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.ico",
      },
    },
  ],
};
