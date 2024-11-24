// Step 1: Import React
import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

// Step 2: Define your component
const AboutPage = () => {
	return (
		<Layout pageTitle="Who dis?">
			<main>
				<h1>About Me</h1>
				<p>
					Hi there! I'm the proud creator of this site, which I built
					with Gatsby.
				</p>
				<Link to="/">Go home</Link>
			</main>
		</Layout>
	);
};

// Step 3: Export your component
export default AboutPage;
