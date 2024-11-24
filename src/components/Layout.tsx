import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
			<nav className="w-full border-b-2">
				<ul className="flex flex-row gap-2">
					<li>
						<Link to="/">
							<StaticImage
								src="../images/logo.png"
								alt="Logo"
								height="60"
							/>
						</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<main className="grid place-items-center">
				<div className="min-w-2xl max-w-3xl">
					<h1 className="m-4">{pageTitle}</h1>
					{children}
				</div>
			</main>
		</div>
	);
};

export default Layout;
