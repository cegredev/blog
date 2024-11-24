import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `cegredev.blog`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/blog`,
			},
			__key: "blog",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "design-images",
				path: `./src/images`,
			},
			__key: "design-images",
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
	],
	pathPrefix: "/blog",
};

export default config;
