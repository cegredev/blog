import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

type Props = {
	pageTitle: string;
	children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: Props) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div>
			{/* <header>{data.site.siteMetadata.title}</header> */}
			<nav>
				<ul className="flex flex-row gap-2">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className="m-4">{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
