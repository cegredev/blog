import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
	return (
		<Layout pageTitle="Who dis?">
			<p>
				Hi there! I'm the proud creator of this site, which I built with
				Gatsby.
			</p>
			<Link to="/">Go home</Link>
		</Layout>
	);
};

export default AboutPage;
