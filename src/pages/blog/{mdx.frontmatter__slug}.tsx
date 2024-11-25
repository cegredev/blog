import * as React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";

type Props = {
	data: any;
	children: any;
};

const BlogPost = ({ data, children }: Props) => {
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<div className="blog">
				<p>{data.mdx.frontmatter.date}</p>
				{children}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
		}
	}
`;

export const Head = ({ data }: any) => (
	<Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
