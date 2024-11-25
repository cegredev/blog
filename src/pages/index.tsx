import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="Home">
			<p>Welcome to my blog... Hope it helps!</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
