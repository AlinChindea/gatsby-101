module.exports = {
    siteMetadata: {
        title: `Alin Chindea`,
        author: `Alin 🦕`,
        description: `Alin's personal site for Gatsby 101 at Codeland`,
        siteUrl: `https://alin-gatsby-101.netlify.app/`,
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/alinchindea`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/AlinChindea`
            }
        ],
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured:true,
            }
        }
    ]
}