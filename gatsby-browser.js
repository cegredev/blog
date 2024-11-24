import "./src/styles/global.css";

// START (1)
// (1): Without doing this, React throws 418 and 423 errors in production.
// These are likely cause by the --use-prefix flag.
// This code prevents that.
import React from "react";
import ReactDOM from "react-dom/client";

export const replaceHydrateFunction = () => {
	return (element, container) => {
		const root = ReactDOM.createRoot(container);
		root.render(element);
	};
};

// Replace this by your own page wrapper:
export const wrapPageElement = ({ element, props }) => {
	return <div {...props}>{element}</div>;
};
// END (1)
