import React from "react";
import "./button.scss";

const Button = ({ children, isDisabled, style, ...other }) => {
	const styleDisabled = {
		color: "white",
		backgroundColor: "gray",
		cursor: "default",
	};
	return (
		<button
			className="button"
			style={{ ...(isDisabled && styleDisabled), ...style }}
			disabled={isDisabled}
			{...other}
		>
			{children}
		</button>
	);
};

export default Button;
