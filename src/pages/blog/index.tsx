import * as React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, graphql } from "gatsby";

type Props = {
	data: {
		allMdx: {
			nodes: {
				id: string;
				excerpt: string;
				frontmatter: {
					title: string;
					date: string;
					slug: string;
				};
			}[];
		};
	};
};

const BlogPage = ({ data }: Props) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>
						<Link to={`/blog/${node.frontmatter.slug}`}>
							{node.frontmatter.title}
						</Link>
					</h2>{" "}
					<p>Posted: {node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
					slug
				}
				id
				excerpt
			}
		}
	}
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
